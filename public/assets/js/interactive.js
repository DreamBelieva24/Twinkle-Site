$(document).ready(function(){
$("#contact-button").on("click", function () {
    let newContact = {
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        address: $("#address").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        subject: $("#subject").val(),
        message: $("#message").val(),
    }
    validate();
    $.ajax("/contact", {
      type: "POST",
      data: newContact
    }).then(
      function() {
        location.reload();
      }
    );
  })

  // function validate () {
  //   if($("#first_name").val() === ""){
  //     alert("Please fill in your First Name")
  //   }
  // }
  
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

});
