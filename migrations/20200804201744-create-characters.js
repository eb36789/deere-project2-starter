'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('characters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      house: {
        type: Sequelize.STRING
      },
      school: {
        type: Sequelize.STRING
      },
      ministryOfMagic: {
        type: Sequelize.BOOLEAN
      },
      orderOfThePhoenix: {
        type: Sequelize.BOOLEAN
      },
      dumbledoresArmy: {
        type: Sequelize.BOOLEAN
      },
      deathEater: {
        type: Sequelize.BOOLEAN
      },
      bloodStatus: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      patronus: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      alias: {
        type: Sequelize.STRING
      },
      wand: {
        type: Sequelize.STRING
      },
      boggart: {
        type: Sequelize.STRING
      },
      animagus: {
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
    await queryInterface.dropTable('characters');
  }
};