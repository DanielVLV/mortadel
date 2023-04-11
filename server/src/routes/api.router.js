const router = require('express').Router();
const {
  Category, Product, Cart, Tags,
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
      attributes: ['id', 'name'],
      order: [[Product, 'categoryId', 'ASC']],
      include: {
        model: Product,
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
          model: Tags,
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

module.exports = router;
