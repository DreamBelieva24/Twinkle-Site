// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
module.exports = function(sequelize, DataTypes) {
  

// Creates a "Book" model that matches up with DB
var Inventory = sequelize.define("Inventory", {
 
  item_name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  item_number: {
    type: DataTypes.STRING
  },
  in_stock: {
    type: DataTypes.INTEGER
  },
  price: {
    type: DataTypes.INTEGER
  }
 
  
});

return Inventory;
};
