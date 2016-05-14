var Project = function(data) {
  this.name = data.name;
  this.id = data.id;
  this.complete = false;
};

Project.prototype.complete = function() {
  this.complete = true;
};

module.exports = Project;
