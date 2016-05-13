var Task = require('./task');
var taskRepo = require('./taskRepository');
var userRepo = require('./userRepository');
var projectRepo =   require('./projectRepository');


//taskRepo.get() looks through the db for what element specified
//new Task will take the json data returned by taskRepo.get() and make a
//new object with it
var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
