var repos = require('../repo_factory');

var User = function(data) {
  this.name = data.name;
  this.id = data.id;
};

User.prototype.save = function() {
  repos.userRepo.save(this);
}

module.exports = User;
