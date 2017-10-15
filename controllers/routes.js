var express = require("express");
var router = express.Router();
var leads = require("../models/leads.js");
var app = express();
var nodemailer = require('nodemailer');

// Create the router for the app, and export the router at the 
//end of your file.
router.get("/", function(req, res) {
    res.render("index");
});

router.post("/", (req, res) => {
  console.log(req.body);
  const output = `
    <p> You have a new lead</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
      <li>City: ${req.body.city}</li>
      <li>Crime: ${req.body.crime}</li>
      <li>Type: ${req.body.chargeType}</li>
    </ul>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ar3home@gmail.com', // generated ethereal user
            pass: 'r1tspy1t'  // generated ethereal password
        },
        tls: {
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"OC Lawyers" <ar3home@gmail.com>', // sender address
        to: 'ar3home@gmail.com', // list of receivers
        subject: 'New OC Lawyers Lead ✔', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        var chargeType = `${req.body.chargeType}`;
        if(chargeType == "Felony") {
        res.redirect('quote.html');
      } else if(chargeType == "Misdemeanor") {
        res.redirect('quotemis.html');
      } else {
        res.redirect('/');
      }
    });
});    

module.exports = router;