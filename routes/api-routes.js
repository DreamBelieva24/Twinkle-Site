var db = require("../Models");

module.exports = function (app) {

    //just a stand in function until we have the models ready
    // app.get("/shop", function (req, res) {
    //     db.Inventory.findAll({}).then(data => {
    //         let allProductsForHandlebars = {
    //             product: data
    //         }
    //         res.json(allProductsForHandlebars);
    //     })
    // });

    // app.get("/shop/:id", function (req, res) {
    //     let param = req.params.id;
    //     db.Inventory.findOne({
    //         where: {
    //             id: param
    //         }
    //     }).then( (data) => {
    //         let specificProduct = {
    //             product: data
    //         }
    //         res.json(specificProduct);
    //     })
    // });

    app.post("/contact", function (req, res, next) {
        db.CustomerInfo.create(req.body).then(data => {
            res.json(data);
        }).catch(errors => {
            console.log(errors);
            res.json(errors);
        })
    })

    // app.post("/contact", function (req, res) {
    //     db.CustomerInfo.create(req.body)
    //         .then(
    //             res.json(req.body))
    //         .catch(
    //             res.json({error:true})
    //         );
    // })
}