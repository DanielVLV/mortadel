const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, { foreignKey: 'categoryId' });
      this.belongsToMany(models.Cart, { through: 'CartsProducts', foreignKey: 'productId' });
      this.belongsToMany(models.Tag, { through: 'TagsProducts', foreignKey: 'productId' });
      this.hasMany(models.Favourites, { foreignKey: 'productId' });
      // define association here
    }
  }
  Product.init({
    categoryId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    fullDescription: DataTypes.TEXT,
    img: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
