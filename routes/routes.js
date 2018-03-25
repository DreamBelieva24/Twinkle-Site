var db = require("../models");
const path = require("path");
const email = require("../public/assets/js/email");

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
        // db.Inventory.findAll({}).then(data => {
            // let allProductsForHandlebars = {
            //     product: data
            // }
            // res.json(allProductsForHandlebars);
            res.sendFile(path.join(__dirname, "../public/assets/shop.html"));
        // })
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
        //sends an email with contact info
        let string = JSON.stringify(req.body);
        email(string);
        //creates db entry with contact info
        db.CustomerInfo.create(req.body).then(data => {
            res.json(data);
        }).catch(errors => {
            res.json(errors);
        })
    })
}