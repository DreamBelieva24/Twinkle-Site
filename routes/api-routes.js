var db = require("../models");

module.exports = function (app) {

    //getItemsFromDB is just a stand in function until we have the models ready
    app.get("/shop", function (req, res) {
        db.products.findAll({}).then(data => {
            let allProductsForHandlebars = {
                product: data
            }
            res.render("shop", allProductsForHandlebars);
        })
    });

    app.get("/shop/:id", function (req, res) {
        let param = req.params.product_id;
        res.products.findOne({
            where: {
                product_id: param
            }
        }).then( (data) => {
            let specificProduct = {
                product: data
            }
            res.render("modalView", specificProduct);
        })
    });

    app.post("/contact", function (req, res) {
        let contactInfo = req.body.contact;
        db.contact.create(req.body.contact);
    });
}