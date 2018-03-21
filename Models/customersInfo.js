// Dependencies
// =============================================================

module.exports = function(sequelize, DataTypes) {
// Creates a "Book" model that matches up with DB
var CustomerInfo = sequelize.define("CustomerInfo", {
//   user_id: {
//     type: Sequelize.INTEGER
//   },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true,
    }
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isAlpha: true,
      notEmpty: true,
    }
  },
 address: {
    type: DataTypes.STRING,
    validate: {
      
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  phone: {
    type: DataTypes.STRING,
    validate: {
      not: ["[a-z]",'i']
    }
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  }
});

return CustomerInfo;
};
