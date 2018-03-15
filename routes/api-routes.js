var db = require("../models");

module.exports = function (app) {

    //getItemsFromDB is just a stand in function until we have the models ready
    app.get("/shop", function (req, res) {
        res.getItemsFromDB( function (data) {
            let productsFromDBForHandlebars = {
                product: data
            }
            res.render("shop", productsFromDBForHandlebars);
        });
    });

    app.get("/shop/:id", function (req, res) {
        let param = req.params.product_id
        res.getSpecificItem(param, function (data) {
            let specificProduct = {
                product: data
            }
            res.render("modal", specificProduct);
        })
    });

    app.post("/contact", function (req, res) {

    });
};