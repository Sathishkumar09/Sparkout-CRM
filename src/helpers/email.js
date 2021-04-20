const nodemailer = require('nodemailer');

// smtp connection
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
export const sendWelcomeEmail = (email, userName, password) => {
  const mailOptions = {
    from: 'asathishkumar54@gmail.com', // sender address
    to: email, // receiver
    subject: 'testing', // Subject line
    html: `
          <h1>User-name : ${userName} <br>  Password : ${password}</h1> ` //your html actions 
  }
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err)
      console.log(err)
    else
      console.log(info);
  });
}