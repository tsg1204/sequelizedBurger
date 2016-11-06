'use strict';
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
   }, 
  {
    freezeTableName: true
  },
  {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return burger;
};