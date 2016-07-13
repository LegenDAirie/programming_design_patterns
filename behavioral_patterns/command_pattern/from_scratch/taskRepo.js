var _ = require('../../../utility/lodash');

var repo = (function(){

  var tasks = {};

  var commands = [];

  var pushCommands = function(command) {
    commands.push(command);
  };

  return {
    save: function(task) {
      tasks[task.id] = task;
      console.log('saving ' + task.name + ' to the database');
    },

    complete: function(task) {
      console.log('completing ' + task.name);
    },

    replay: function() {
      _.forEach(commands, function(command) {
        repo.executeNoLog(command.name, command.obj);
      });
    },
    pushCommands: pushCommands,
  };
})();

repo.executeNoLog = function(name) {
  var args = Array.prototype.slice.call(arguments, 1);

  if(repo[name]) {
    return repo[name].apply(repo, args);
  }

  return false;
};

repo.execute = function(name) {
  var args = Array.prototype.slice.call(arguments, 1);

  repo.pushCommands({
    name: name,
    obj: args[0]
  });

  if(repo[name]) {
    return repo[name].apply(repo, args);
  }

  return false;
};

repo.execute('save', {
  name: "task1",
  id: 1,
});
repo.execute('save', {
  name: "task2",
  id: 2,
});
repo.execute('save', {
  name: "task3",
  id: 3,
});
repo.execute('save', {
  name: "task4",
  id: 4,
});
repo.execute('save', {
  name: "task5",
  id: 5,
});

console.log(repo.tasks);
repo.tasks = {};
console.log(repo.tasks);

repo.replay();
console.log(repo.tasks);
