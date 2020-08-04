'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characters extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  characters.init({
    name: DataTypes.STRING,
    house: DataTypes.STRING,
    school: DataTypes.STRING,
    ministryOfMagic: DataTypes.BOOLEAN,
    orderOfThePhoenix: DataTypes.BOOLEAN,
    dumbledoresArmy: DataTypes.BOOLEAN,
    deathEater: DataTypes.BOOLEAN,
    bloodStatus: DataTypes.STRING,
    species: DataTypes.STRING,
    patronus: DataTypes.STRING,
    role: DataTypes.STRING,
    alias: DataTypes.STRING,
    wand: DataTypes.STRING,
    boggart: DataTypes.STRING,
    animagus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'characters',
  });
  return characters;
};