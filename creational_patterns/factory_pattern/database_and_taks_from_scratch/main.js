var objectFactory = require('./object_factory');
var repoFactory = require('./repo_factory');

var task = new objectFactory.Task({name: 'joe', id: 123});
var user = new objectFactory.User({name: 'joe', id: 123});
var project = new objectFactory.Project({name: 'joe', id: 123});

console.log(repoFactory.taskRepo.get(task));
task.save();
// repoFactory.taskRepo.save(task);
console.log(repoFactory.taskRepo.get(task));

console.log(repoFactory.userRepo.get(user));
user.save();
// repoFactory.userRepo.save(user);
console.log(repoFactory.userRepo.get(user));

console.log(repoFactory.projectRepo.get(project));
project.save();
// repoFactory.projectRepo.save(project);
console.log(repoFactory.projectRepo.get(project));
