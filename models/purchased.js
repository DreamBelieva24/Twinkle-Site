// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
module.exports = function(sequelize, DataTypes) {

// Creates a "Book" model that matches up with DB
var Purchased = sequelize.define("Purchased", {
//   user_id: {
//     type: Sequelize.INTEGER
//   },
  first_name: {
    type: DataTypes.STRING
  },
  last_name: {
    type: DataTypes.STRING
  },
 
 address: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.INTEGER
  },
  item_name: {
    type:DataTypes.STRING
  },
  item_number: {
    type: DataTypes.TEXT
  }
} );

return Purchased;
};
