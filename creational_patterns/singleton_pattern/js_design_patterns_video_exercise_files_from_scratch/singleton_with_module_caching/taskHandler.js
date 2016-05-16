//this repo is the same instance as the repo in main.js
var repo = require('./Repo');

//would end up creating a new instance that would be different then the
//one in main.js
// var Repo = require('./Repo');
// var repo = Repo();

var taskHandler = function() {

  var save = function() {
    repo.save();
  }

  return {
    save: save
  }
}

module.exports = new taskHandler
