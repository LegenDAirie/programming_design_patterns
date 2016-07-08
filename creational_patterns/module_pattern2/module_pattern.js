var repo = function() {

  var db = {};

  var get = function(id) {
    console.log('getting ' + id + 'from database');
    return {
      name: 'new task from database'
    };
  }

  var save = function(task) {
    console.log('saving ' + task.name + ' to the database');
  };

  return {
    get: get,
    save: save
  }
};

module.exports = repo();
