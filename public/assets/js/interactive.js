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
          rangelength: [3, 250]
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
      submitHandler: function (form) {
        $.ajax("/contact", {
          type: "POST",
          data: $(form).serialize(),
          success: function (res) {
            if (res.errors) {
              $('#modal1').modal('open');
            } else {
              location.reload();
            }
          },
        });
      }
    })
});