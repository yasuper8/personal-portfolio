var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MyWorkSchema = new Schema({
  title: String,
  descriptions: String,
  websiteUrl: String,
  githubUrl: String,
  projectImgUrl: String
});


var MyWork = mongoose.model('MyWork', MyWorkSchema);
module.exports = MyWork;
