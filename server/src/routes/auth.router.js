const jwtDecode = require('jwt-decode');

const router = require('express').Router();
const bcrypt = require('bcrypt');

const { User, Sequelize } = require('../../db/models');

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
    const userObject = jwtDecode(req.body.credential);
    const { email } = userObject;
    const checkUser = await User.findOne({ where: { email }, raw: true });
    if (!checkUser) {
      const user = await User.create({
        email: userObject.email,
        name: userObject.name,
        password: userObject.email,
      });
      req.session.user = user;
      res.json(user);
    } else {
      req.session.user = checkUser;
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

module.exports = router;
