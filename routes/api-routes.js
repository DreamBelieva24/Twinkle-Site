var db = require("../Models");

module.exports = function (app) {

    //getItemsFromDB is just a stand in function until we have the models ready
    app.get("/shop", function (req, res) {
        db.Inventory.findAll({}).then(data => {
            let allProductsForHandlebars = {
                product: data
            }
            res.json(allProductsForHandlebars);
        })
    });

    app.get("/shop/:id", function (req, res) {
        let param = req.params.id;
        db.Inventory.findOne({
            where: {
                id: param
            }
        }).then( (data) => {
            let specificProduct = {
                product: data
            }
            res.json(specificProduct);
        })
    });

    app.post("/contact", function (req, res) {
        console.log(req.body);
        let contactInfo = req.body;
        db.CustomerInfo.create(req.body);
        res.json(contactInfo);
    });
}