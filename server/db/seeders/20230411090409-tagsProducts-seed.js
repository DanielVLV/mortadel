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
    await queryInterface.bulkInsert('TagsProducts', [{
      productId: 1,
      tagId: 3,
    },
    {
      productId: 2,
      tagId: 3,
    },
    {
      productId: 4,
      tagId: 3,
    },
    {
      productId: 5,
      tagId: 3,
    },
    {
      productId: 6,
      tagId: 3,
    },
    {
      productId: 7,
      tagId: 2,
    },
    {
      productId: 8,
      tagId: 2,
    },
    {
      productId: 9,
      tagId: 2,
    },
    {
      productId: 10,
      tagId: 2,
    },
    {
      productId: 11,
      tagId: 2,
    },
    {
      productId: 12,
      tagId: 4,
    },
    {
      productId: 13,
      tagId: 4,
    },
    {
      productId: 14,
      tagId: 4,
    },
    {
      productId: 15,
      tagId: 4,
    },
    {
      productId: 16,
      tagId: 4,
    },
    {
      productId: 17,
      tagId: 4,
    },
    {
      productId: 18,
      tagId: 4,
    },
    {
      productId: 19,
      tagId: 4,
    },
    {
      productId: 20,
      tagId: 4,
    },
    {
      productId: 21,
      tagId: 4,
    },
    {
      productId: 22,
      tagId: 4,
    },
    {
      productId: 23,
      tagId: 4,
    },
    {
      productId: 24,
      tagId: 1,
    },
    {
      productId: 25,
      tagId: 1,
    },
    {
      productId: 26,
      tagId: 1,
    },
    {
      productId: 27,
      tagId: 1,
    },
    {
      productId: 28,
      tagId: 1,
    },
    {
      productId: 29,
      tagId: 1,
    },
    {
      productId: 30,
      tagId: 1,
    },
    {
      productId: 31,
      tagId: 1,
    },
    {
      productId: 32,
      tagId: 1,
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
      tagId: 1,
    },
    {
      productId: 36,
      tagId: 1,
    },
    {
      productId: 37,
      tagId: 1,
    },
    {
      productId: 38,
      tagId: 1,
    },
    {
      productId: 39,
      tagId: 1,
    },
    {
      productId: 40,
      tagId: 7,
    },
    {
      productId: 41,
      tagId: 7,
    },
    {
      productId: 42,
      tagId: 7,
    },
    {
      productId: 43,
      tagId: 7,
    },
    {
      productId: 44,
      tagId: 7,
    },
    {
      productId: 45,
      tagId: 7,
    },
    {
      productId: 46,
      tagId: 7,
    },
    {
      productId: 47,
      tagId: 7,
    },
    {
      productId: 48,
      tagId: 7,
    },
    {
      productId: 49,
      tagId: 7,
    },
    {
      productId: 50,
      tagId: 7,
    },
    {
      productId: 51,
      tagId: 7,
    },
    {
      productId: 52,
      tagId: 5,
    },
    {
      productId: 53,
      tagId: 5,
    },
    {
      productId: 54,
      tagId: 5,
    },
    {
      productId: 55,
      tagId: 5,
    },
    {
      productId: 56,
      tagId: 5,
    },
    {
      productId: 57,
      tagId: 5,
    },
    {
      productId: 58,
      tagId: 5,
    },
    {
      productId: 59,
      tagId: 5,
    },
    {
      productId: 60,
      tagId: 5,
    },
    {
      productId: 61,
      tagId: 5,
    },
    {
      productId: 62,
      tagId: 5,
    },
    {
      productId: 63,
      tagId: 5,
    },
    {
      productId: 64,
      tagId: 5,
    },
    {
      productId: 65,
      tagId: 5,
    },
    {
      productId: 66,
      tagId: 6,
    },
    {
      productId: 67,
      tagId: 6,
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
