var objectFactory = function() {
  var objects = this;
  var objectList = [
    {name: 'Task', source: './objects/task'},
    {name: 'User', source: './objects/user'},
    {name: 'Project', source: './objects/project'},
  ];

  objectList.forEach(function(object) {
    objects[object.name] = require(object.source);
  });
};

module.exports = new objectFactory;
