module.exports = (app) => {

  app.get("/", (req, res) => {
    res.render("index");
  });

  app.get("/contact", (req, res) => {
    res.render("contact");
  });

};