'use strict';
const houses = require("../models/houses");
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
      house:{
        type: Sequelize.STRING
      },
      houseId: {
        type: Sequelize.STRING,
        references: {
          model:'houses',
          key: 'id'
        }
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
      },
     imageurl: {
       type: Sequelize.TEXT,
       defaultValue: "data:image/png;base64,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"
     }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('characters');
  }
};