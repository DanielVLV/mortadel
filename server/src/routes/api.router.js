const router = require('express').Router();
const {
  Category,
  Product,
  Cart,
  Tag,
  TagsProducts,
  Favourites,
} = require('../../db/models');

router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories.map((category) => category.get()));
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.get('/products', async (req, res) => {
  try {
    const products = await Category.findAll({
      attributes: ['id', 'categoryName'],
      order: [[Product, 'categoryId', 'ASC']],
      include: {
        model: Product,
        include: [
          {
            model: Tag,
            through: { attributes: [] },
          },
        ],
        // attributes: [],
      },
    });
    res.json(products.map((product) => product.get()));
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.get('/products/tag', async (req, res) => {
  const { tagName } = req.body;
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Tag,
          where: { name: tagName },
          through: {
            attributes: [],
          },
        },
      ],
    });
    res.json(products.map((product) => product.get()));
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.get('/tags', async (req, res) => {
  try {
    const tags = await Tag.findAll();
    // console.log(tags);
    res.json(tags.map((tag) => tag.get()));
  } catch (err) {
    console.log({ msg: err.message });
  }
});
router.post('/cart', async (req, res) => {
  const { userId } = req.body;
  try {
    const result = await Cart.create({
      userId,
    });
    res.json(result);
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.get('/favs', async (req, res) => {
  try {
    const { user } = req.session;

    const result = await Favourites.findAll({
      // raw: true,
      where: { userId: user.id },
      include: [Product],
    });
    // console.log(result)
    res.json(result);
    // console.log("success", arr);
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.post('/favs', async (req, res) => {
  try {
    const { productId, user } = req.body;
    const newObjFavs = await Favourites.findOrCreate({ where: { productId, userId: user.id } });
    res.json(newObjFavs);
    console.log('success', req.body);
  } catch (err) {
    console.log({ msg: err.message });
  }
});

router.delete('/favs', async (req, res) => {
  try {
    const { favId } = req.body;
    const { user } = req.session;
    console.log(favId, user);
    await Favourites.destroy({ where: { id: favId } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
