var express    = require("express");
var bodyParser = require("body-parser");
var path       = require("path");
require('dotenv').config();
// Sets up the Express App

var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

// Routes
require("./routes/routes.js")(app);

// Syncing our sequelize models and then starting our Express app

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    app.emit('serverStarted');
  });
});

module.exports = app;