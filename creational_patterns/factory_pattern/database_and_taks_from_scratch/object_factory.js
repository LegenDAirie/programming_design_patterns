var objectFactory = function() {

  var objects = this;
  var objectList = [
    {name: "Task", source: "./objects/task"},
    {name: "Project", source: "./objects/project"},
    {name: "User", source: "./objects/user"}
  ];

  objectList.forEach(function(object) {
    //the values here are the classes, so I do not run it with the ()
    //unlike the repo factory. If we ran what require(object.source)
    //returns then our value would be an instance which isn't what we
    // want.
    objects[object.name] = require(object.source);//not called right away
  });
};

module.exports = new objectFactory;
