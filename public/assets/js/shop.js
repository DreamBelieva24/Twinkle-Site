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
                    let stock = data.product.in_stock;
                    $(".purse-info").remove();
                    //create div to append info to within modal
                    let productDiv = $("<div>").addClass("purse-info")
                    $(".purse-info").empty();
                    $(".purse-no-stock").empty();
                    //create block to display stock and append to div
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let quantity = $("#purse-quantity");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        console.log(i);
                        optionTag = $("<option>").text(i);
                        quantity.append(optionTag);
                    }
                    // let selecting = selectDiv.append(selectTag.append(optionTag));
                    // let selectBlock = productDiv.append(quantity);
                    //display price of purchase
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".purse-choice").append(inventoryBlock);
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
                    let stock = data.product.in_stock;
                    let productDiv = $("<div>").addClass("credit-info")
                    $(".credit-info").empty();
                    $(".credit-no-stock").empty();
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".credit-choice").append(inventoryBlock);
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
                    let stock = data.product.in_stock;
                    let productDiv = $("<div>").addClass("lug-info")
                    $(".lug-info").empty();
                    $(".lug-no-stock").empty();
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    let priceHeader = $("<h4>").text("Price:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".lug-choice").append(inventoryBlock);
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