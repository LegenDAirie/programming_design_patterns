var Task = function(data) {
  this.name = data.name;
  this.user = data.user;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log('completing task: ' + this.name);
};

Task.prototype.save = function() {
  console.log('saving task: ' + this.name);
};

module.exports = Task;
