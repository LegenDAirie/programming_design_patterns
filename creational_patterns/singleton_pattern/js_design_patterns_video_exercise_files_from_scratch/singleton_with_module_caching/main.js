//this repo is the same instance as the repo in taskHandler.js
var repo = require('./Repo');

//would end up creating a new instance that would be different then the
//one in main.js
// var Repo = require('./Repo');
// var repo = Repo();

var taskHandler = require('./taskHandler');


repo.save();
repo.save();
repo.save();

taskHandler.save();
taskHandler.save();
taskHandler.save();
