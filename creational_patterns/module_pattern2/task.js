var Repo = require('./module_pattern');

var Task = function(data) {
  this.name = data.name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.complete = true;
};

Task.prototype.save = function() {
  Repo.save(this);
};

module.exports = Task;
