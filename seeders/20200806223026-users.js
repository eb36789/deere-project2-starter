'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name:'Wyatt Freeman',
      username: 'wyatt',
      password: 'wyatt',
      house: "Gryffindor"
    },
      {
      name:'Beau Freeman',
      username: 'beau',
      password: 'beau',
      house: "Ravenclaw"
    },
    {
      name:'Ryder Freeman',
      username: 'ryder',
      password: 'ryder',
      house: "Hufflepuff"
    },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
