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
    _id: DataTypes.STRING,
    name: DataTypes.STRING,
    mascot: DataTypes.STRING,
    headOfHouse: DataTypes.STRING,
    houseGhost: DataTypes.STRING,
    founder: DataTypes.STRING,
    school: DataTypes.STRING,
    members: DataTypes.STRING,
    values: DataTypes.STRING,
    colors: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Houses',
  });
  return House;
};