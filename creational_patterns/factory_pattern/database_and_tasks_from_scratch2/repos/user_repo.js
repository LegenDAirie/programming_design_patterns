var userRepo = function() {

  var data = {};

  var get = function(user) {
    if (data[user.id]){
      console.log('getting user:' + user.name + ' from the database');
      return data[user.id]
    }
    console.log('that user does not exsist');
  };

  var save = function(user) {
    console.log('saving user: ' + user.name + ' to the database');
    data[user.id] = user;
  };

  return {
    get: get,
    save: save
  }
};

module.exports = userRepo();
