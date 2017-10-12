var express = require("express");
var router = express.Router();
var leads = require("../models/leads.js");

// Create the router for the app, and export the router at the 
//end of your file.
router.get("/", function(req, res) {
  leads.selectAll(function(data) {
    console.log(data);
    res.render("index");
  });
});

router.post("/", function(req, res) {
  cat.create([
    "firstName", "lastName", "cityArrested", "crime", "felonyOrMist", "email"
  ], [
    req.body.firstName, req.body.lastName, req.body.cityArrested, req.body.crime , req.body.felonyOrMist , req.body.email 
  ], function() {
    res.redirect("/");
  });
});

module.exports = router;