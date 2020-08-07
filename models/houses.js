'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class houses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      houses.hasMany(models.characters, { foreignKey: "houseId"});
    }
  };
  houses.init({
    name: DataTypes.STRING,
    mascot: DataTypes.STRING,
    headOfHouse: DataTypes.STRING,
    houseGhost: DataTypes.STRING,
    founder: DataTypes.STRING,
    school: DataTypes.STRING,
    values: DataTypes.STRING,
    colors: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'houses',
  });
  return houses;
};