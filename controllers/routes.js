var express = require("express");
var router = express.Router();
var app = express();
var nodemailer = require('nodemailer');
var babel = require("babel-register");

// Create the router for the app, and export the router at the 
//end of your file.
router.get("/", function(req, res) {
    res.render("index");
});
// POST request to email index.html form to Jon
router.post("/est", (req, res) => {
  console.log(req.body);
  const output = `
    <p> You have a new lead</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
      <li>Email: ${req.body.email}</li>
      <li>City Arrested In: ${req.body.city}</li>
      <li>Arresting Charge: ${req.body.crime}</li>
      <li>Type: ${req.body.chargeType}</li>
    </ul>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 80,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'oclawyers2@sportchrome.com', // generated ethereal user
            pass: '123456'  // generated ethereal password
        },
        tls: {
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"OC Lawyers" <oclawyers2@sportchrome.com>', // sender address
        to: 'oclawyers2@sportchrome.com', // list of receivers
        subject: 'New OC Lawyers Lead', // Subject line
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
        res.redirect('estf.html');
      } else if(chargeType == "Misdemeanor") {
        res.redirect('estm.html');
      } else {
        res.redirect('/');
      }
    });
});  

// POST request to email index.html form to Jon
router.post("/contact", (req, res) => {
  console.log(req.body);
  const output = `
    <p>New customer requested a call</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.firstName} ${req.body.lastName}</li>
      <li>City of Residence: ${req.body.city}</li>
      <li>Phone: ${req.body.phone}</li>
      <li>Best Time: ${req.body.bestTime}</li>
      <li>DOB: ${req.body.dob}</li>
      <li>Date Arrested: ${req.body.dateArrested}</li>
      <li>Arresting Charge: ${req.body.crime}</li>
      <li>Type: ${req.body.chargeType}</li>      
      <li>Additional Charges: ${req.body.multipleOff}</li>
      <li>Prior Convictions: ${req.body.priors}</li>
    </ul>
  `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net',
        port: 80,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'oclawyers2@sportchrome.com', // generated ethereal user
            pass: '123456'  // generated ethereal password
        },
        tls: {
          rejectUnauthorized:false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"OC Lawyers" <oclawyers2@sportchrome.com>', // sender address
        to: 'oclawyers2@sportchrome.com', // list of receivers
        subject: 'OC Lawyers Lead to Contact', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('thanks.html');
    });
});  

module.exports = router;