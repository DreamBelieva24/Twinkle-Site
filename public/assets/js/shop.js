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
                    let inventoryHeader = $("<h5>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let selectHeader = $("<h5>").text("Order quantity:")
                    let selectTag = $("<select>").addClass("select-quant waves-effect waves-cyan btn-flat btn-small #00b8d4 black-text").attr("data-target", 'dropdown1');
                    let selectTag = $("<select>").addClass("chosen-quantity-purse");
                    let optionTag;
                    for (let i = 0; i <= stock; i++) {
                        optionTag = $("<option>").text(i).addClass("purse" + i).attr("value", i);
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag);
                    let selectionAndHeader = selectHeader.append(selection);
                    let selectBlock = productDiv.append(selectionAndHeader);
                    //display price of purchase
                    let priceHeader = $("<h5>").text("Price per:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".purse-choice").append(inventoryBlock);
                } else {
                    let stockMessageDiv = $("<div>").addClass("purse-no-stock")
                    $(".purse-no-stock").empty();
                    $(".purse-info").empty();
                    let noStockMessage = $("<h5>").text("Not in stock");
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
                    let inventoryHeader = $("<h5>").text("In stock:");
                    let inventoryStock = $("<p>").text(stock);
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let selectHeader = $("<h5>").text("Order quantity:")
                    let selectTag = $("<select>").addClass("select-quant waves-effect waves-cyan btn-flat btn-small #00b8d4 black-text");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        optionTag = $("<option>").text(i);
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag);
                    let selectionAndHeader = selectHeader.append(selection);
                    let selectBlock = productDiv.append(selectionAndHeader);
                    //display price of purchase
                    let priceHeader = $("<h5>").text("Price per:");
                    let price = $("<p>").text("$" + data.product.price);
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".credit-choice").append(inventoryBlock);
                } else {
                    let stockMessageDiv = $("<div>").addClass("credit-no-stock")
                    $(".credit-no-stock").empty();
                    $(".credit-info").empty();
                    let noStockMessage = $("<h5>").text("Not in stock");
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
                    let inventoryHeader = $("<h5>").text("In stock:").addClass("black-text");
                    let inventoryStock = $("<p>").text(stock).addClass("black-text");
                    let inventoryBlock = productDiv.append(inventoryHeader.append(inventoryStock));
                    //create dropdown to allow user to select desired quantity
                    let selectHeader = $("<h5>").text("Order quantity:").addClass("black-text");
                    let selectTag = $("<select>").addClass("select-quant waves-effect waves-cyan btn-flat btn-small #00b8d4 black-text font-size:5px");
                    let optionTag;
                    for (let i = 1; i <= stock; i++) {
                        optionTag = $("<option>").text(i).addClass("black-text").css("font-size", "20px");
                        selectTag.append(optionTag);
                    }
                    let selection = selectTag.append(optionTag).addClass("black-text font-size:20px");
                    let selectionAndHeader = selectHeader.append(selection).addClass("black-text font-size:30px");
                    let selectBlock = productDiv.append(selectionAndHeader).addClass("black-text font-size:30px");
                    //display price of purchase
                    let priceHeader = $("<h5>").text("Price per:").addClass("black-text");
                    let price = $("<p>").text("$" + data.product.price).addClass("black-text");
                    let priceBlock = productDiv.append(priceHeader.append(price));
                    $(".lug-choice").append(inventoryBlock);
                }  else {
                    let stockMessageDiv = $("<div>").addClass("lug-no-stock")
                    $(".lug-no-stock").empty();
                    $(".lug-info").empty();
                    let noStockMessage = $("<h5>").text("Not in stock").addClass("black-text");
                    let fullStockDiv = stockMessageDiv.append(noStockMessage)
                    $(".lug-choice").append(fullStockDiv);
                }
            } 
        );
    });

});