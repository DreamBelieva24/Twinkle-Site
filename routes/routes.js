var db = require("../models");
const path = require("path");
const email = require("../public/assets/js/email");

module.exports = function (app) {

    let homeGetRoute = function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
        res.status(200);
    };
    let contactGetRoute = function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/contact.html"));
        res.status(200);
    };
    let cartGetRoute = function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/cart.html"));
        res.status(200);
    };
    let shopGetRoute = function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/shop.html"));
        // db.Inventory.findAll({}).then(data => {
            // let allProductsForHandlebars = {
            //     product: data
            // }
            // res.json(allProductsForHandlebars);
        // })
    }
    let shopParamGetRoute = function (req, res) {
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
    }
    let contactPostRoute = function (req, res) {
        //sends an email with contact info
        let string = JSON.stringify(req.body);
        email(string);
        //creates db entry with contact info
        db.CustomerInfo.create(req.body).then(data => {
            res.json(data);
        }).catch(errors => {
            res.json(errors);
        })
    }

    app.get("/", homeGetRoute);
    app.get("/contact", contactGetRoute);
    app.get("/cart", cartGetRoute);
    app.get("/shop", shopGetRoute);
    app.get("/shop/:id", shopParamGetRoute);
    app.post("/contact", contactPostRoute)
}