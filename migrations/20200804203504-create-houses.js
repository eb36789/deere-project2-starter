'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('houses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING,
      },
      mascot: {
        type: Sequelize.STRING
      },
      headOfHouse: {
        type: Sequelize.STRING
      },
      houseGhost: {
        type: Sequelize.STRING
      },
      founder: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      values: {
        type: Sequelize.STRING
      },
      colors: {
        type: Sequelize.STRING
      },
      createdAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue: new Date(),
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('houses');
  }
};