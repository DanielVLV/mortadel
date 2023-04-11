/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Categories',
          },
          key: 'id',
        },
        onDelete: 'cascade',
      },
      title: {
        type: Sequelize.TEXT,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.TEXT,
      },
      fullDescription: {
        type: Sequelize.TEXT,
      },
      img: {
        type: Sequelize.TEXT,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  },
};
