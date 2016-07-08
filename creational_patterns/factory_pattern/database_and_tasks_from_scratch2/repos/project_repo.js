var projectRepo = function() {

  var data = {};

  var get = function(project) {
    if (data[project.id]) {
      console.log('getting project:' + project.name + ' from the database');
      return data[project.id];
    };
    console.log('no such project exsists man');

  };

  var save = function(project) {
    console.log('saving project: ' + project.name + ' to the database');
    data[project.id] = project;
  };

  var display = function() {
    console.log(data);
  };

  return {
    get: get,
    save: save,
    display: display
  }
};

module.exports = projectRepo();
