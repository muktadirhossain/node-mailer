const nodemailer = require("nodemailer");

const sendEmail = (req, res) => {
  const { email, subject, emailBody } = req.body;
  
  // res.locals.data = req.body;
  // res.render('showEmail')
  // return
    

  // Create a transporter using webMail service configuration
  const transporter = nodemailer.createTransport({
    host: process.env.WEB_MAIL_HOST,
    port: process.env.WEB_MAIL_PORT,
    secure: process.env.WEB_MAIL_IS_SECURED, // If your webmail service uses SSL/TLS, set this to true
    auth: {
      user: process.env.WEB_MAIL_USERNAME,
      pass: process.env.WEB_MAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: '"Muktadir Hossain" <rabbi@tara.net.bd>', //youremail@gmail.com
    to: `"Topu Vai" <${email}>`, // USERS EMAIL <mdtopu11@gmail.com>
    subject: `${subject}`,
    text: `${subject}`, //resetPasswordLink
    html: `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      <title>Preview Email | Email Sender APP</title>
      <!-- Bootstrap CDN -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossorigin="anonymous"
      />
      <style>
        body {
          /* overflow: hidden; */
        }
        .container {
          width: 800px !important;
          margin: 0 auto;
          padding: 50px 50px;
          background-image: linear-gradient(120deg, #84fab0 10%, #8fd3f4 100%);
          border-radius: 20px;
          box-shadow: 0px 0px 166px 5px rgba(202, 255, 8, 0.3) inset;
          margin-bottom: 100px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <p id="emailBody">${emailBody}</p>
        <img src="https://muktadirhossain.github.io/hot-gadgets/images/phone/phone-3.png" alt="images" />
      </div>
    </body>
  </html>
  `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      // console.log(error);
      res.locals.data = {
        errorCode: "500",
        message: error.message,
      };
      res.render("error");
      return;
    } else {
      // Send The Re-set Password Link To email::
      console.log("email sent successfully");
      res.locals.data ={'success': true}
      res.render("home");
      // res.send("Email sent Successfully");
      return;
    }
  });
  //   res.send(req.body.emailBody);
};

module.exports = { sendEmail };
