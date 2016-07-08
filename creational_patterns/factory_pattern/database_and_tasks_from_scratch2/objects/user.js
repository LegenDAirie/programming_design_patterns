var User = function(data) {
  this.name = data.name;
  this.id = data.id;
};

User.prototype.save = function() {
  console.log('saving user: ' + this.name);
};

module.exports = User;
