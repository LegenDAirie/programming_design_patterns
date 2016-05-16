var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.save = function() {
  console.log('saving ' + this.name + 'task');
}

Task.prototype.complete = function() {
  console.log('completing task')
  this.completed = true;
}

var task = new Task("joe");

var urgentTask = new Task("joe");

urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('notifying important people');
}


urgentTask.save = function() {
  this.notify();
  Task.prototype.save.call(this);
}

urgentTask.complete = function() {
  Task.prototype.complete.call(this);
  this.save();
}

urgentTask.complete();
// console.log(urgentTask.completed);
