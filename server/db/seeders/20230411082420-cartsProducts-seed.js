/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('CartsProducts', [{
      cartId: 1,
      productId: 1,
    },
    {
      cartId: 1,
      productId: 4,

    },
    {
      cartId: 1,
      productId: 3,
    },
    {
      cartId: 1,
      productId: 20,
    },
    {
      cartId: 1,
      productId: 12,
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('CartsProducts', null, {});
     */
    await queryInterface.bulkDelete('CartsProducts', null, {});
  },
};
