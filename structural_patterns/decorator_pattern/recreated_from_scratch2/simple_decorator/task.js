var Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
};

var task = new Task('legacy task');
task.save();
task.complete();

var urgentTask = new Task('urgent task');

urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notifying important people');
};

urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};

urgentTask.save();
