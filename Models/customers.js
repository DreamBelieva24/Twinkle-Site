// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {

// Creates a "Book" model that matches up with DB
var Customer = sequelize.define("Customer", {
//   user_id: {
//     type: Sequelize.INTEGER
//   },
  user_name: {
    type: DataTypes.STRING
  },
 
  password: {
    type: DataTypes.STRING
  }
});

return Customer;
};
