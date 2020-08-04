'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class House extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   House.hasMany(models.Character, {
    //     through: 'characters',
    //     foreignKey: 'house_id',
      };

  
  House.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    playerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Houses',
  });
  return House;
};