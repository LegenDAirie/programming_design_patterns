var repo = function() {

  var database = {};

  var save = function(project) {
    database[project.id] = project;
  };

  var get = function(project) {
    if (database[project.id]) {
      return database[project.id];
    };
  };

  return {
    save: save,
    get: get
  };
};

module.exports = repo;
