var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-portofolio");

module.exports.MyWork = require("./myWork");
