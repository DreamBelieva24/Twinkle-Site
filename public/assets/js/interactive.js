$(document).ready(function () {
  console.log("hi");
  console.log($("form#contact"))
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
              console.log("hi");
              $('.modal-content').empty();
              $('#modal1').modal('open');
              let modalTitle = $('<h4>').text('Processing Error')
              let text       = 'There was an issue processing your information,';
                  text      += ' please double check each field and make sure your information is correct ';
                  text      += 'i.e. no numbers in name fields, correct email format, correct phone number format, etc.';
              let body       = $('<p>').text(text);
              $('.modal-content').append(modalTitle).append(body);
            } else {
              console.log("hi");
              $('.contact-form').hide();
              $('.modal-content').empty();
              $('#modal1').modal('open');
              let modalTitle = $('<h4>').text('Success!')
              let text       = 'Your information has been submitted successfully.';
                  text      += ' We will get back to you ASAP.';
              let body       = $('<p>').text(text);
              $('.modal-content').append(modalTitle).append(body);
            }
          },
        });
      }
    })
});