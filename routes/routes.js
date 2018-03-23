var db = require("../models");
const path = require("path");

module.exports = function (app) {

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });
    
    app.get("/contact", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
    });
    
    app.get("/cart", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/assets/cart.html"));
    });

    app.get("/shop", function (req, res) {
        db.Inventory.findAll({}).then(data => {
            let allProductsForHandlebars = {
                product: data
            }
            // res.json(allProductsForHandlebars);
            res.sendFile(path.join(__dirname, "../public/assets/shop.html"));
        })
    });

    app.get("/shop/:id", function (req, res) {
        let param = req.params.id;
        db.Inventory.findOne({
            where: {
                item_number: param
            }
        }).then( (data) => {
            let specificProduct = {
                product: data
            }
            res.json(specificProduct);
        })
    });

    app.post("/contact", function (req, res, next) {
        db.CustomerInfo.create(req.body).then(data => {
            res.json(data);
        }).catch(errors => {
            console.log(errors);
            res.json(errors);
        })
    })
}