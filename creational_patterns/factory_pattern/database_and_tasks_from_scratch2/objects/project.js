var ProjectRepo = require('../repos/project_repo')

var Project = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.completed = false;
};

Project.prototype.save = function() {
  ProjectRepo.save(this);
};

Project.prototype.complete = function() {
  console.log('completing task: ' + this.name);
  this.completed = true;
};

module.exports = Project;
