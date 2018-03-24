$(document).ready(function () {
  $('.carousel').carousel();
});

// Next slide
$('.carousel').carousel('next');
$('.carousel').carousel('next', 3); // Move next n times.

// Previous slide
$('.carousel').carousel('prev');
$('.carousel').carousel('prev', 4); // Move prev n times.

// Set to nth slide
$('.carousel').carousel('set', 4);

// Destroy carousel
$('.carousel').carousel('destroy');




// Or with jQuery

// $('.carousel').carousel({
//   fullWidth: true
// });

$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
     



  // Or with jQuery

  // $('.dropdown-trigger').dropdown();

  // var instance = M.Dropdown.getInstance(elem);

 

  //   $('.dropdown-trigger').dropdown('methodName');
  //   $('.dropdown-trigger').dropdown('methodName', paramName);

    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
  
  $(document).ready(function() {
    $('select').material_select();
 });

productNames = []
productColors = []
productQuantities = []
productPrices = []

$(".addCart-purse").on("click", function() {

  productNames.push(document.getElementById("Octagon Purse").id)
  productColors.push(document.getElementsByClassName("chosen-color-purse").value)
  // productQuantities.push(parseInt(document.getElementById("chosen-quantity-purse").value))
  // productPrices.push(parseInt(document.getElementById("54.00").id))
  
  displayCart();
 
});

$(".addCart-tag").on("click", function() {

  productNames.push(document.getElementById("Luggage Tag").id)
  productColors.push(document.getElementsByClassName("chosen-color-tag").value)
  // productQuantities.push(parseInt(document.getElementById("chosen-quantity-tag").value))
  // productPrices.push(parseInt(document.getElementById("10.00").id))
  
  displayCart();
 
});

$(".addCart-ccholder").on("click", function() {

  productNames.push(document.getElementById("Credit Card Holder").id)
  productColors.push(document.getElementsByClassName("chosen-color-ccholder").value)
  // productQuantities.push(parseInt(document.getElementById("chosen-quantity-ccholder").value))
  // productPrices.push(parseInt(document.getElementById("12.00").id))
  
  displayCart();
 
});

function displayCart(){

  cartdata = "<table class='striped' id='cart-table'><thead><tr><th>Product Name</th><th>Color</th><th>Quantity</th><th>Price</th><th>Total</th><th></th></tr></thead><tbody>";

  total = 0;

  for (i=0; i<productColors.length; i++){
    total += productPrices[i] * productQuantities[i];

    cartdata += "<tr><td>" + productNames[i] + "</td><td>" + productColors[i] + "</td><td>" +
    productQuantities[i] + "</td><td> $" + productPrices[i] + "</td><td> $" + productPrices[i] * 
    productQuantities[i] + "</td><td><button onclick='delElement(" + i + ")'>Remove Item</button></td></tr>"


  }
  cartdata += "</tbody></table>"
  document.getElementById("container-cart").innerHTML = cartdata

  $("#shipping").html("<strong>Shipping:</strong> $" + 6.95)
  var tax = total * 0.07
  var taxRound = tax.toFixed(2)
  $("#tax").html("<strong>Tax:</strong> $" + taxRound)
  
  totalPrice = (total + 6.95 + tax);
  totalPriceRound = totalPrice.toFixed(2);

  $("#total-price").html("<strong>Total Price:</strong> $" + totalPriceRound)
  
  
}

function delElement(a){
  productColors.splice(a, 1)
  productNames.splice(a, 1)
  productQuantities.splice(a, 1)
  productPrices.splice(a, 1)
  displayCart();
}