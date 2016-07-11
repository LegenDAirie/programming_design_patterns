var Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

var task = new Task('little task');
task.save();
task.complete();

var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};


UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function() {
  console.log('notifying important poeple');
};

UrgentTask.prototype.save = function() {
  this.notify();
  Task.prototype.save.call(this);
};
var urgentTask = new UrgentTask('big task', 1);

urgentTask.complete();
urgentTask.save();
console.log(urgentTask)
