var userRepo = function() {

  var database = {}

  var save = function(user) {
    database[user.name] = user
  }

  var get = function(user) {
    return database[user.name]
  }


  return {
    save: save,
    get: get
  }
}

module.exports = userRepo
