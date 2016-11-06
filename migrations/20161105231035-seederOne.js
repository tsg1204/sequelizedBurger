'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return models.burger.bulkCreate(
      [
        {
          burger_name: 'BigMac',
          devoured: false
        },
        {  
          burger_name: 'Italian Yummy',
          devoured: false
        },
        {  
          burger_name: 'Double Burger',
          devoured: false
        }
      ]
    );
  },
  down: function (queryInterface, Sequelize) {
      return models.burger.destroy({where:{burger_name: [
        "BigMac",
        "Italian Yummy",
        "Double Burger"
    ]}})
  }
};