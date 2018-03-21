$(document).ready(function () {
  $("form#contact")
  .validate({
    errorElement: "div",
    rules: {
      first_name: {
        required: true,
        minlength: 2,
      },
      last_name: {
        required: true,
        minlength: 2
      },
      phone: {
        minlength: 3
      },
      address: {
        rangelength:[3,250]
      },
      email: {
        required: true,
        minlength: 2,
        email: true,
      },
      subject: {
        required: true,
        minlength: 2
      },
      message: {
        required: true,
        minlength: 2
      }
    },
    submitHandler: function(form) {
      $.ajax("/contact", {
        type: "POST",
        data: $(form).serialize(),
        success: function(res) {
          var error = res.errors[0]
          if (error) {
            $('#modal1').modal('open');
          } else {
            location.reload();
          }
        },   
      });
  }
  })
  // .submit(function (e) {
  //   e.preventDefault();
  //   let newContact = {
  //     first_name: $("#first_name").val(),
  //     last_name: $("#last_name").val(),
  //     address: $("#address").val(),
  //     email: $("#email").val(),
  //     phone: $("#phone").val(),
  //     subject: $("#subject").val(),
  //     message: $("#message").val(),
  //   }
  //   $.ajax("/contact", {
  //     type: "POST",
  //     data: newContact
  //   }).then(
  //     function (data) {

  //       //backend validation spit out here
  //       console.log(data);
  //       if(data.error) {
  //         //modal message of error
  //       } else {
  //         location.reload();
  //       }
  //     }
  //   );
  // });
});
