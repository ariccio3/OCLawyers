var orm = require("../config/orm.js");

// inside leads.js, create the code that will call the ORM 
// functions using lead specific input for the ORM.

var leads = {
  selectAll: function(cb) {
    orm.selectAll("leads", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("leads", cols, vals, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller 
// (leadsController.js).
module.exports = leads;