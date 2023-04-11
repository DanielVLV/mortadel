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
    await queryInterface.bulkInsert('Tags', [{
      tagName: 'Вареная',
    },
    {
      tagName: 'Сырокопченая',
    },
    {
      tagName: 'Варено-копченая',
    },
    {
      tagName: 'Полукопченая',
    },
    {
      tagName: 'Деликатесы',
    },
    {
      tagName: 'Тушенка',
    },
    {
      tagName: 'Сосиски-Сардельки',
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
  },
};
