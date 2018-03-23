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
                    let selectHeader = $("<h4>").text("Order quantity:")
                    let selectTag = $("<select>").addClass("select-quant btn");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        optionTag = $("<option>").text(i);
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag);
                    let selectionAndHeader = selectHeader.append(selection);
                    let selectBlock = productDiv.append(selectionAndHeader);
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
                    $(".credit-info").remove();
                    //create div to append info to within modal
                    let productDiv = $("<div>").addClass("credit-info")
                    $(".credit-info").empty();
                    $(".credit-no-stock").empty();
                    //create block to display stock and append to div
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let selectHeader = $("<h4>").text("Order quantity:")
                    let selectTag = $("<select>").addClass("select-quant btn");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        optionTag = $("<option>").text(i);
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag);
                    let selectionAndHeader = selectHeader.append(selection);
                    let selectBlock = productDiv.append(selectionAndHeader);
                    //display price of purchase
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
                    $(".lug-info").remove();
                    //create div to append info to within modal
                    let productDiv = $("<div>").addClass("lug-info")
                    $(".lug-info").empty();
                    $(".lug-no-stock").empty();
                    //create block to display stock and append to div
                    let inventoryHeader = $("<h4>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let selectHeader = $("<h4>").text("Order quantity:")
                    let selectTag = $("<select>").addClass("select-quant btn");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        optionTag = $("<option>").text(i);
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag);
                    let selectionAndHeader = selectHeader.append(selection);
                    let selectBlock = productDiv.append(selectionAndHeader);
                    //display price of purchase
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