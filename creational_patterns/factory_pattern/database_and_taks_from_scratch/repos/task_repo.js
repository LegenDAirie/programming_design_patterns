var repo = function() {

  var database = {}

  var save = function(task) {
    database[task.id] = task;
  };

  var get = function(task) {
    if (database[task.id]) {
      return database[task.id];
    };
  };

  return {
    save: save,
    get: get
  };
};

module.exports = repo;
