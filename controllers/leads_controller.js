var express = require("express");
var router = express.Router();
var leads = require("../models/leads.js");

// Create the router for the app, and export the router at the 
//end of your file.
router.get("/", function(req, res) {
  leads.selectAll(function(data) {
    var hbsObject = {
      leads: data
    };
    res.render("index", hbsObject);
  });
});

// need to fix this
router.post("/", function(req, res) {
  leads.insertOne(["lead_name"], [req.body.lead_name], function() {
    res.redirect("/");
  });
});



module.exports = router;
