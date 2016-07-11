var _ = require('../../../utility/lodash');

var Task = function(data) {
  this.flyweight = FlyweightFactory.get(data.project, data.user, data.completed, data.priority);
  this.name = data.name;
};

var Flyweight = function(project, user, completed, priority) {
  this.project = project;
  this.user = user;
  this.completed = completed;
  this.priority = priority;
};

var FlyweightFactory = function() {
  var flyweights = {};
  var numberOfFlyweights = 0;

  var get = function(project, user, completed, priority) {
    if (!flyweights[project + user + completed + priority]) {
      flyweights[project + user + completed + priority] = new Flyweight(project, user, completed, priority);
      numberOfFlyweights++;
    }
    return flyweights[project + user + completed + priority]
  };

  var count = function() {
    return numberOfFlyweights
  };

  return {
    get: get,
    count: count
  }

}();

var TaskService = function() {
  var tasks = {};
  var numberOfTasks = 0;

  var add = function(task) {
    if (!tasks[tasks.name]) {
      tasks[task.name] = task;
      numberOfTasks++
    };
  };

  var get = function() {
    if (tasks[task.name]) {
      return tasks[task.name];
    }
  };

  var count = function() {
    return numberOfTasks
  };


  return {
    add: add,
    get: get,
    count: count
  }
}();

var users = ['steve', 'jan', 'em', 'lern', 'jorg'];
var priorities = [1,2,3,4,5];
var completed = [false, true];
var project = ['fixing', 'working', 'dancing', 'eating'];


var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 100000; i++) {
  var task = new Task({
    name: 'task' + i,
    project: project[_.random(0,3)],
    user: _.random(0, 4),
    completed: _.random(0, 1),
    priority: _.random(0, 4)
  })

  TaskService.add(task);
}

var afterMemory = process.memoryUsage().heapUsed;

console.log(TaskService.count());
console.log(FlyweightFactory.count());
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);
