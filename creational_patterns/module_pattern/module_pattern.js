// module pattern is just an object literal with keys and functions that is
// useful when you only need one of these objects

// using tasks from js_constructor

var repo = function() {

  var database = {};

  var get = function(id) {
    console.log('Getting task: ' + id)
    return {
      name: 'new task from batabase'
    }
  }

  var save = function(task) {
    console.log('saving ' + task.name + 'to the database');
  }

  return {
    get: get,
    save: save
  }
}

module.exports = repo();
