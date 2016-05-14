var Task = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.complete = false;
};

Task.prototype.complete = function() {
  this.complete = true;
};

module.exports = Task;
