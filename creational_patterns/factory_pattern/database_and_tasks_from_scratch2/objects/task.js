var TaskRepo = require('../repos/task_repo');

var Task = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.completed = false;
};

Task.prototype.save = function() {
  // console.log('saving task: ' + this.name);
  TaskRepo.save(this);
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

module.exports = Task;
