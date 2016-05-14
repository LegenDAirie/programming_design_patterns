var Task = require('./task');
var User = require('./User');
var Project = require('./Project');
var repoFactory = require('./factory');

var task1 = new Task({name: 'joe', id: 123});
console.log(repoFactory.taskRepo.get(task1));
repoFactory.taskRepo.save(task1);
console.log(repoFactory.taskRepo.get(task1));
