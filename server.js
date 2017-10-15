// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var nodemailer = require('nodemailer');

// EXPRESS CONFIGURATION
//Stores the express function in variable app to be used below
var app = express();
// listens for database requests from the user
var PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" 
// directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parses URL encoded bodies. A new body object containing 
// the parsed data is populated on the request object after the 
// middleware (i.e. req.body)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// This requirement points to where our Express routes are 
// located and gives the server access to them.
var routes = require('./controllers/routes.js');
app.use("/", routes);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});