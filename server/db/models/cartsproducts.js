const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartsProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CartsProducts.init({
    cartId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CartsProducts',
  });
  return CartsProducts;
};
