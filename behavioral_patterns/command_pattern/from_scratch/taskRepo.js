var _ = require('../../../utility/lodash');

var taskRepo = (function() {
  var tasks = {};
  var commands = [];

  var save = function(task) {
    tasks[task.id] = task;
    console.log('saving ' + task.name + ' to the database');
  };

  var complete = function(task) {
    console.log('completing ' + task.name);
  };

  var logExecution = function(command) {
    commands.push(command);
  };

  var showTasks = function() {
    return tasks;
  };

  var eraseTasks = function() {
    tasks = {};
  };

  var rebuildDatabase = function () {
    _.forEach(commands, function(command) {
      taskRepo.executeNoLog(command.name, command.obj);
    });
  };


  return {
    save: save,
    complete: complete,
    logExecution: logExecution,
    showTasks: showTasks,
    eraseTasks: eraseTasks,
    rebuildDatabase: rebuildDatabase
  }
})();

taskRepo.execute = function(commandName) {
  var args = Array.prototype.slice.call(arguments, 1);

  taskRepo.logExecution({
    name: commandName,
    obj: args[0]
  });

  if(taskRepo[commandName]) {
    taskRepo[commandName].call(taskRepo, args[0]);
  }

  return false;
};
taskRepo.executeNoLog = function(commandName) {
  var args = Array.prototype.slice.call(arguments, 1);

  if(taskRepo[commandName]) {
    taskRepo[commandName].call(taskRepo, args[0]);
  }

  return false;
};

taskRepo.execute('save', {
  name: 'task1',
  id: 1
});

taskRepo.execute('save', {
  name: 'task2',
  id: 2
});

taskRepo.execute('save', {
  name: 'task3',
  id: 3
});

taskRepo.execute('save', {
  name: 'task4',
  id: 4
});

console.log(taskRepo.showTasks());
taskRepo.eraseTasks();
console.log(taskRepo.showTasks());
taskRepo.rebuildDatabase();
console.log(taskRepo.showTasks());
