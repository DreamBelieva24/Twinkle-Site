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

 $(".addCart").on("click", function() {

  productColors.push(document.getElementById("chosen-color").value)

  console.log(productColors)

  displayCart();
 
  
});

function displayCart(){

  cartdata = "<h2>Shopping Cart</h2><div class='col s3'><table class='striped'><thead><tr><th>Product Name</th><th>Color</th><th>Quantity</th><th>Price</th><tr><thead>";

  for (i=0; i<productColors.length; i++){
    cartdata += "<tbody><tr>" + productColors[i] + " <button onclick='delElement(" + i + ")'>Remove Item</button></div>"
  }

console.log(cartdata)

  document.getElementById("container-cart").innerHTML = cartdata

}

function delElement(a){
  productColors.splice(a, 1)
  displayCart();
}