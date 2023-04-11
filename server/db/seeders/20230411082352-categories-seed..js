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
    await queryInterface.bulkInsert('Categories', [{
      categoryName: 'Варено - копченые колбасы',
    },
    {
      categoryName: 'Сырокопченые колбасы',
    },
    {
      categoryName: 'Полукопченые колбасы',
    },
    {
      categoryName: 'Вареные колбасы в натуральной оболочке',
    },
    {
      categoryName: 'Вареные колбасы в оболочке из целлофана',
    },
    {
      categoryName: 'Вареные колбасаы в оболочке из полиамида',
    },
    {
      categoryName: 'Сосиски',
    },
    {
      categoryName: 'Шпикачки и сардельки',
    },
    {
      categoryName: 'Мясные деликатесы',
    },
    {
      categoryName: 'Тушенка',
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
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
