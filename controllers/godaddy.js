var express = require("express");
var router = express.Router();
var app = express();
var nodemailer = require("nodemailer");

// Create the router for the app, and export the router at the 
//end of your file.
router.get("/", function(req, res) {
    res.render("index");
});
// POST request to email index.html form to Jon
router.post('/est', function(req, res) {
  console.log(req.body);
    var output = "\n    <p> You have a new lead</p>\n    <h3>Contact Details</h3>\n    <ul>\n      <li>Name: " + req.body.firstName + " " + req.body.lastName + "</li>\n      <li>Email: " + req.body.email + "</li>\n      <li>City Arrested In: " + req.body.city + "</li>\n      <li>Arresting Charge: " + req.body.crime + "</li>\n      <li>Type: " + req.body.chargeType + "</li>\n    </ul>\n  ";
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
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
    var mailOptions = {
        from: '"OC Lawyers" <oclawyers2@sportchrome.com>', // sender address
        to: 'oclawyers2@sportchrome.com', // list of receivers
        subject: 'New OC Lawyers Lead', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        var chargeType = "" + req.body.chargeType;
            if (chargeType == "Felony") {
                res.redirect('estf.html');
            } else if (chargeType == "Misdemeanor") {
                res.redirect('estm.html');
            } else {
                res.redirect('estimate.html');
            }
    });
});  

// POST request to email index.html form to Jon
router.post("/contact", function(req, res) {
  console.log(req.body);
    var output = "\n    <p>New customer requested a call</p>\n    <h3>Contact Details</h3>\n    <ul>\n      <li>Name: " + req.body.firstName + " " + req.body.lastName + "</li>\n      <li>City of Residence: " + req.body.city + "</li>\n      <li>Phone: " + req.body.phone + "</li>\n      <li>Best Time: " + req.body.bestTime + "</li>\n      <li>DOB: " + req.body.dob + "</li>\n      <li>Date Arrested: " + req.body.dateArrested + "</li>\n      <li>Arresting Charge: " + req.body.crime + "</li>\n      <li>Type: " + req.body.chargeType + "</li>      \n      <li>Additional Charges: " + req.body.multipleOff + "</li>\n      <li>Prior Convictions: " + req.body.priors + "</li>\n    </ul>\n  ";
    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
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
    var mailOptions = {
        from: '"OC Lawyers" <oclawyers2@sportchrome.com>', // sender address
        to: 'oclawyers2@sportchrome.com', // list of receivers
        subject: 'OC Lawyers Lead to Contact', // Subject line
        text: '', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('thanks.html');
    });
});  

module.exports = router;