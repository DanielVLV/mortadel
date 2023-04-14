const jwtDecode = require('jwt-decode');

const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Todo, Sequelize } = require('../../db/models');

router.get('/', (req, res) => {
  res.json(req.session.user || null);
});

router.post('/signup', async (req, res) => {
  const {
    name, email, phone, password,
  } = req.body;
  try {
    console.log('email', req.body);
    const checkEmail = await User.findOne({ where: { email } });
    if (!checkEmail) {
      const hash = await bcrypt.hash(password, 10);
      const user = (await User.create({
        name, email, phone, password: hash, isAdmin: false,
      })).get();
      delete user.password;
      delete user.createdAt;
      delete user.updatedAt;
      req.session.user = user;
      res.json(user);
    }
    res.json({ msg: 'уже зарегистрирован' });
  } catch (error) {
    console.log(error);
  }
});

router.post('/googlesignup', async (req, res) => {
  try {
    const { form } = req.body;
    const userObject = jwtDecode(form.credential);
    const { email } = userObject;
    const checkUser = await User.findOne({ where: { email }, raw: true });
    if (!checkUser) {
      const user = await User.create({
        email: userObject.email,
        name: userObject.name,
        password: userObject.email,
      });
      res.json(user);
    } else {
      res.json(checkUser);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ where: { email }, raw: true });
    if (checkUser) {
      const checkPass = await bcrypt.compare(password, checkUser.password);
      if (!checkPass) {
        res.status(401).json({ msg: 'Try again' });
      }
      if (checkPass) {
        delete checkUser.password;
        delete checkUser.createdAt;
        delete checkUser.updatedAt;
        req.session.user = checkUser;
        res.json(checkUser);
      }
      if (!checkUser) {
        res.status(400).json({ msg: 'Try again' });
      }
    }
    if (!checkUser) {
      res.json({ msg: 'не найден' });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/signout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('Cookie');
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get('/home', async (req, res) => {
  try {
    const todo = await Todo.findAll({ raw: true });
    const todoSort = todo.sort((a, b) => b.id - a.id);
    res.json(todoSort);
  } catch (error) {
    console.log(error);
  }
});

router.post('/home', async (req, res) => {
  try {
    const { id } = req.body;
    const status = await Todo.findOne({ where: { id } });
    await Todo.update({ status: !status.dataValues.status }, {
      where: { id },
      returning: true,
      plain: true,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.post('/addtodo', async (req, res) => {
  const { user } = req.session;
  const { title } = req.body;
  try {
    await Todo.create({
      title, status: true, userId: user.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.delete('/del', async (req, res) => {
  try {
    const { id } = req.body;
    await Todo.destroy({ where: { id }, raw: true });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.get('/info/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Todo.findOne({ where: { id }, returning: true, plain: true });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.post('/info/update', async (req, res) => {
  try {
    const { id, title } = req.body;
    await Todo.update({ title }, {
      where: { id },
      returning: true,
      plain: true,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

router.post('/search', async (req, res) => {
  const posts = await Todo.findAll({
    where: { title: { [Sequelize.Op.iLike]: `%${req.body.title}%` } },
  });
  res.json(posts);
});

module.exports = router;
