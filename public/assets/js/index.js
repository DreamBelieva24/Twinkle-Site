$(document).ready(function(){
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

$("#contact-button").on("click", function () {
  let newContact = {
      first_name: $(".first-name").val(),
      last_name: $(".last-name").val(),
      address: $(".address").val(),
      email: $(".email").val(),
      phone: $(".phone").val(),
      subject: $(".subject").val(),
      message: $(".message").val(),
  }
  $.ajax("/contact", {
    type: "POST",
    data: newContact
  }).then(
    function() {
      location.reload();
    }
  );
})

// $("#contact-button").on("click", function () {
//     let newContact = {
//         first_name: $(".first-name").val(),
//         last_name: $(".last-name").val(),
//         address: $(".address").val(),
//         email: $(".email").val(),
//         phone: $(".phone").val(),
//         subject: $(".subject").val(),
//         message: $(".message").val(),
//     }
//     $.ajax("/contact", {
//       type: "POST",
//       data: newContact
//     }).then(
//       function() {
//         location.reload();
//       }
//     );
// })

// let id = $(this).data("id");
//     let newVisit = $(this).data("newvisit");
//     let newVisitState = {
//       visited: newVisit
//     };
//     $.ajax("/bucketlist/" + id, {
//       type: "PUT",
//       data: newVisitState
//     }).then(
//       function() {
//         // console.log("changed visit to", newVisit);
//         location.reload();
//       }
//     );


$(document).ready(function(){
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
     