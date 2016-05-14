// var Repo = require('./repos/task_repo')

//data is information saved as in json format, you pull out the data and
//stick it in a task object so you can do stuff with it
var Task = function(data) {
  this.name = data.name;
  this.complete = false;
}

// Task.prototype.save = function() {
//   //Repo contains a hash that stores different task in json format
//   Repo.save(this);
// }

Task.prototype.complete = function() {
  this.complete = true;
  this.save();
}

module.exports = Task;
