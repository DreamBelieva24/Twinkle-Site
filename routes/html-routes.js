const path = require("path");

module.exports = (app) => {

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/index.html"));
  });

  app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
  });

  app.get("/shop", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/shop.html"));
  });

  app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/assets/cart.html"));
  });

};