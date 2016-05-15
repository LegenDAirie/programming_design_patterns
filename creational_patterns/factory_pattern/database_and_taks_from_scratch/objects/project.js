var repos = require('../repo_factory');

var Project = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.complete = false;
};

Project.prototype.complete = function() {
  this.complete = true;
};

Project.prototype.save = function() {
  repos.projectRepo.save(this);
}

module.exports = Project;
