var repo = function() {

  var database = {};

  var save = function(user) {
    database[user.id] = user;
  };

  var get = function(user) {
    if (database[user.id]) {
      return database[user.id];
    };
  };

  return {
    save: save,
    get: get
  };
};

module.exports = repo;
