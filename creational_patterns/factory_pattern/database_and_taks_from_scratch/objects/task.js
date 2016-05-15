var repos = require('../repo_factory');

var Task = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.complete = false;
};

Task.prototype.complete = function() {
  this.complete = true;
};

Task.prototype.save = function() {
  repos.taskRepo.save(this);
}
module.exports = Task;
