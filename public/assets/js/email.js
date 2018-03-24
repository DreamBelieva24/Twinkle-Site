var nodemailer = require("nodemailer");

module.exports = function email(data) {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'robertbernardbrown@gmail.com',
        pass: 'kofurmqtdqekehop'
    }
});

const mailOptions = {
    from: 'robertbernardbrown@gmail.com',
    to: 'robertbernardbrown@gmail.com',
    subject: 'New Purchase',
    html: data
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
};

 