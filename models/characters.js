'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class characters extends Model {
      static associate(models) {
       characters.belongsTo(models.houses, { foreignKey: "houseId", as:'House' });
  };
}
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
    animagus: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'characters',
  });
  return characters;
};