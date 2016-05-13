var Task = require('./task');
var repoFactory = require('./repoFactory2');

//repoFactory is a hash that holds the taskRepo, userRepo, and
//projectRepo object/module
//repoFactory.task.get() is the same as taskRepo.get() which looks
//through its db for the element specified 
//new Task will take the json data returned by repoFactory.task.get()
//stored in the taskRepo db and make a new object with it
var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

//console.log(task1);
task1.save();
