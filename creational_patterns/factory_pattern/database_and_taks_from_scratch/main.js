var objectFactory = require('./object_factory');
var repoFactory = require('./repo_factory');


var task = new objectFactory.Task({name: 'joe', id: 123});

console.log(repoFactory.taskRepo.get(task));
repoFactory.taskRepo.save(task);
console.log(repoFactory.taskRepo.get(task));
