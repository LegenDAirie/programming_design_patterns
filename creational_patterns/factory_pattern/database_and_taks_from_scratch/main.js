var repoFactory = require('./factory');
var Task = require('./task');

var task = new Task({name: 'joe'})
console.log(repoFactory.taskRepo.get(task))
repoFactory.taskRepo.save(task)
console.log(repoFactory.taskRepo.get(task))
