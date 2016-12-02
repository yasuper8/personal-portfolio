/************
 * DATABASE *
 ************/

var db = require('../models');


// Get All My Works
function index(req, res) {
  db.MyWork.find({},function(err, myworks) {
    if (err) {
      return console.log('Get my works error: ' + err);
    }
    res.json(myworks);
  });
}

// Create a new work
function create(req, res) {
  db.MyWork.create(req.body, function(err, mywork) {
    if (err) {console.log("creating error :", err);}
    res.json(mywork);
  });
}

// export public methods here
module.exports = {
  index: index,
  // displayUser: displayUser,
  create: create
  // destroy: destroy
};
