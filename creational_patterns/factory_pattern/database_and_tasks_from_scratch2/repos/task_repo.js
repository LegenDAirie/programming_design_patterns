var taskRepo = function() {

  var data = {};

  var get = function(task) {
    if (data[task.id]) {
      console.log('getting task:' + data[task.id].name + ' from the database');
      return data[task.id];
    }
    console.log('no such task exsists brah');
  };

  var save = function(task) {
    console.log('saving task: ' + task.name + ' to the database');
    data[task.id] = task;
  };

  var display = function(task) {
    console.log(data);
  };

  return {
    get: get,
    save: save,
    display: display
  }
};

module.exports = taskRepo();
