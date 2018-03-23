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

 $(".addCart").on("click", function() {
 
  $(".product-name").html("Product Name")
  $(".product-color").html("Product Color")
  $(".product-quantity").html("Product Quantity")
  $(".product-price").html("Price")
   
  
});