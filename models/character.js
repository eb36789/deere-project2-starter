'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Character.belongsTo(models.Houses, {foreignKey: 'houses_id' });
  };
  }
  
  Character.init({
    name: DataTypes.STRING,
    img: DataTypes.STRING,
    characterId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Characters',
  });
  return Character;
};