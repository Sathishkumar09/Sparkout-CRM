const nodemailer = require('nodemailer');

//smtp connection
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'asathishkumar54@gmail.com',
    pass: 'lezmrrmgryeqfvxr'
  }
});
//sending mail by using this function
export const sendForgotPasswordLink = (email, id, otp) => {
  const mailOptions = {
    from: 'asathishkumar54@gmail.com', // sender address
    to: email, //  receiver
    subject: 'Testing', // Subject line
    // for reset password link //
    // html:` <h1>please click here to change your password <br><a href="reset_password/${id}">Reset Password</a>`       // plain text body
    //for otp //
    html: `Your Otp is : ${otp} <br>
        <a href="reset_password/${id}"><h1>Reset Password</h1></a>`
  }
  transporter.sendMail(mailOptions, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}