var orm = require("../config/orm.js");

// inside leads.js, create the code that will call the ORM 
// functions using lead specific input for the ORM.

var leads = {
  all: function(cb) {
    orm.all("leads", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("leads", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
// (leadsController.js).
module.exports = leads;