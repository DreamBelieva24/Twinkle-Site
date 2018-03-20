// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
// Creates a "Book" model that matches up with DB
var CustomerInfo = sequelize.define("CustomerInfo", {
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
  email: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  subject: {
    type: DataTypes.STRING
  },
  message: {
    type: DataTypes.TEXT
  }
});

return CustomerInfo;
};
