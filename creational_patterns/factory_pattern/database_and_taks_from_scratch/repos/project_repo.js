var projectRepo = function() {

  var database = {}

  var save = function(project) {
    database[project.name] = project
  }

  var get = function(project) {
    return database[project.name]
  }


  return {
    save: save,
    get: get
  }
}

module.exports = projectRepo
