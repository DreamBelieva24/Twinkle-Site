$(document).ready(function () {

    $("#purse-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
                if (data.product) {
                    let productDiv = $("<div>").addClass("purse-info")
                    $(".purse-info").empty();
                    $(".purse-no-stock").empty();
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(data.product.in_stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    $(".purse-choice").append(inventoryBlock);
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                } else {
                    let stockMessageDiv = $("<div>").addClass("purse-no-stock")
                    $(".purse-no-stock").empty();
                    $(".purse-info").empty();
                    let noStockMessage = $("<h4>").text("Not in stock");
                    let fullStockDiv = stockMessageDiv.append(noStockMessage)
                    $(".purse-choice").append(fullStockDiv);
                }
            }
        );
    });

    $("#credit-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
                if (data.product) {
                    let productDiv = $("<div>").addClass("credit-info")
                    $(".credit-info").empty();
                    $(".credit-no-stock").empty();
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(data.product.in_stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    $(".credit-choice").append(inventoryBlock);
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                } else {
                    let stockMessageDiv = $("<div>").addClass("credit-no-stock")
                    $(".credit-no-stock").empty();
                    $(".credit-info").empty();
                    let noStockMessage = $("<h4>").text("Not in stock");
                    let fullStockDiv = stockMessageDiv.append(noStockMessage)
                    $(".credit-choice").append(fullStockDiv);
                }
            }
        );
    });

    $("#lug-select").change(function () {
        let val = $(this).val();
        console.log(val);
        $.ajax("/shop/" + val, {
            type: "GET"
        }).then(
            function (data) {
                console.log(data);
                if (data.product) {
                    let productDiv = $("<div>").addClass("lug-info")
                    $(".lug-info").empty();
                    $(".lug-no-stock").empty();
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(data.product.in_stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    $(".lug-choice").append(inventoryBlock);
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                }  else {
                    let stockMessageDiv = $("<div>").addClass("lug-no-stock")
                    $(".lug-no-stock").empty();
                    $(".lug-info").empty();
                    let noStockMessage = $("<h4>").text("Not in stock");
                    let fullStockDiv = stockMessageDiv.append(noStockMessage)
                    $(".lug-choice").append(fullStockDiv);
                }
            } 
        );
    });

});