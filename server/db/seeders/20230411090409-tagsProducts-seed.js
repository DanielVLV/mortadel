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
    await queryInterface.bulkInsert('TagsProducts', [
      {
        productId: 1,
        tagId: 1,
      },
      {
        productId: 2,
        tagId: 1,
      },
      {
        productId: 2,
        tagId: 2,
      },
      {
        productId: 3,
        tagId: 2,
      },
      {
        productId: 4,
        tagId: 4,
      },
      {
        productId: 4,
        tagId: 5,
      },
      {
        productId: 5,
        tagId: 3,
      },
      {
        productId: 5,
        tagId: 5,
      },
      {
        productId: 6,
        tagId: 3,
      },
      {
        productId: 6,
        tagId: 4,
      },
      {
        productId: 7,
        tagId: 2,
      },
      {
        productId: 8,
        tagId: 3,
      },
      {
        productId: 8,
        tagId: 2,
      },
      {
        productId: 8,
        tagId: 1,
      },
      {
        productId: 9,
        tagId: 1,
      },
      {
        productId: 9,
        tagId: 4,
      },
      {
        productId: 10,
        tagId: 4,
      },
      {
        productId: 10,
        tagId: 1,
      },
      {
        productId: 11,
        tagId: 4,
      },
      {
        productId: 11,
        tagId: 2,
      },
      {
        productId: 12,
        tagId: 1,
      },
      {
        productId: 12,
        tagId: 2,
      },
      {
        productId: 13,
        tagId: 3,
      },
      {
        productId: 13,
        tagId: 5,
      },
      {
        productId: 14,
        tagId: 2,
      },
      {
        productId: 14,
        tagId: 4,
      },
      {
        productId: 15,
        tagId: 1,
      },
      {
        productId: 15,
        tagId: 2,
      },
      {
        productId: 16,
        tagId: 3,
      },
      {
        productId: 16,
        tagId: 5,
      },
      {
        productId: 17,
        tagId: 3,
      },
      {
        productId: 17,
        tagId: 5,
      },
      {
        productId: 18,
        tagId: 3,
      },
      {
        productId: 18,
        tagId: 5,
      },
      {
        productId: 19,
        tagId: 1,
      },
      {
        productId: 19,
        tagId: 2,
      },
      {
        productId: 19,
        tagId: 4,
      },
      {
        productId: 20,
        tagId: 1,
      },
      {
        productId: 20,
        tagId: 1,
      },
      {
        productId: 20,
        tagId: 2,
      },
      {
        productId: 21,
        tagId: 5,
      },
      {
        productId: 22,
        tagId: 1,
      },
      {
        productId: 22,
        tagId: 2,
      },
      {
        productId: 22,
        tagId: 3,
      },
      {
        productId: 23,
        tagId: 1,
      },
      {
        productId: 23,
        tagId: 2,
      },
      {
        productId: 24,
        tagId: 2,
      },
      {
        productId: 24,
        tagId: 4,
      },
      {
        productId: 24,
        tagId: 5,
      },
      {
        productId: 25,
        tagId: 5,
      },
      {
        productId: 25,
        tagId: 4,
      },
      {
        productId: 25,
        tagId: 3,
      },
      {
        productId: 26,
        tagId: 5,
      },
      {
        productId: 27,
        tagId: 2,
      },
      {
        productId: 27,
        tagId: 5,
      },
      {
        productId: 28,
        tagId: 1,
      },
      {
        productId: 28,
        tagId: 2,
      },
      {
        productId: 28,
        tagId: 4,
      },
      {
        productId: 29,
        tagId: 5,
      },
      {
        productId: 30,
        tagId: 2,
      },
      {
        productId: 30,
        tagId: 3,
      },
      {
        productId: 30,
        tagId: 5,
      },
      {
        productId: 31,
        tagId: 5,
      },
      {
        productId: 32,
        tagId: 4,
      },
      {
        productId: 33,
        tagId: 1,
      },
      {
        productId: 34,
        tagId: 1,
      },
      {
        productId: 35,
        tagId: 2,
      },
      {
        productId: 35,
        tagId: 3,
      },
      {
        productId: 36,
        tagId: 1,
      },
      {
        productId: 37,
        tagId: 2,
      },
      {
        productId: 37,
        tagId: 4,
      },
      {
        productId: 38,
        tagId: 1,
      },
      {
        productId: 38,
        tagId: 2,
      },
      {
        productId: 39,
        tagId: 1,
      },
      {
        productId: 39,
        tagId: 4,
      },
      {
        productId: 40,
        tagId: 3,
      },
      {
        productId: 40,
        tagId: 5,
      },
      {
        productId: 41,
        tagId: 3,
      },
      {
        productId: 42,
        tagId: 1,
      },
      {
        productId: 42,
        tagId: 3,
      },
      {
        productId: 43,
        tagId: 1,
      },
      {
        productId: 43,
        tagId: 3,
      },
      {
        productId: 44,
        tagId: 1,
      },
      {
        productId: 44,
        tagId: 2,
      },
      {
        productId: 45,
        tagId: 2,
      },
      {
        productId: 45,
        tagId: 4,
      },
      {
        productId: 46,
        tagId: 2,
      },
      {
        productId: 46,
        tagId: 4,
      },
      {
        productId: 47,
        tagId: 2,
      },
      {
        productId: 47,
        tagId: 4,
      },
      {
        productId: 48,
        tagId: 2,
      },
      {
        productId: 49,
        tagId: 2,
      },
      {
        productId: 50,
        tagId: 3,
      },
      {
        productId: 50,
        tagId: 5,
      },
      {
        productId: 51,
        tagId: 3,
      },
      {
        productId: 51,
        tagId: 5,
      },
      {
        productId: 52,
        tagId: 1,
      },
      {
        productId: 52,
        tagId: 3,
      },
      {
        productId: 53,
        tagId: 3,
      },
      {
        productId: 53,
        tagId: 4,
      },
      {
        productId: 54,
        tagId: 1,
      },
      {
        productId: 55,
        tagId: 1,
      },
      {
        productId: 55,
        tagId: 4,
      },
      {
        productId: 56,
        tagId: 1,
      },
      {
        productId: 56,
        tagId: 4,
      },
      {
        productId: 57,
        tagId: 1,
      },
      {
        productId: 57,
        tagId: 3,
      },
      {
        productId: 58,
        tagId: 1,
      },
      {
        productId: 59,
        tagId: 1,
      },
      {
        productId: 59,
        tagId: 2,
      },
      {
        productId: 60,
        tagId: 1,
      },
      {
        productId: 61,
        tagId: 1,
      },
      {
        productId: 62,
        tagId: 3,
      },
      {
        productId: 63,
        tagId: 3,
      },
      {
        productId: 63,
        tagId: 5,
      },
      {
        productId: 64,
        tagId: 2,
      },
      {
        productId: 65,
        tagId: 3,
      },
      {
        productId: 65,
        tagId: 4,
      },
      {
        productId: 66,
        tagId: 3,
      },
      {
        productId: 66,
        tagId: 5,
      },
      {
        productId: 67,
        tagId: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TagsProducts', null, {});
  },
};
