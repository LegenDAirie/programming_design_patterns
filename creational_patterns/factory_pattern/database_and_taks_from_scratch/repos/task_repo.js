var taskRepo = function() {

  var database = {}

  var save = function(task) {
    database[task.name] = task
  }

  var get = function(task) {
    return database[task.name]
  }


  return {
    save: save,
    get: get
  }
}

module.exports = taskRepo
