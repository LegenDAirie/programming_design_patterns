var repo = require('./repo');

var taskHandler = function() {

  var save = function() {
    repo.save();
  };

  return {
    save: save
  };
};

module.exports = taskHandler();
