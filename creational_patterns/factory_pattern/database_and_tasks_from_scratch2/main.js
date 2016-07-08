var ObjectFactory = require('./object_factory');
var RepoFactory = require('./repo_factory');

var task1 = RepoFactory.TaskRepo.get({id: 1});
var task1 = new ObjectFactory.Task({name: 'feed the cat', id: 1});
var user = new ObjectFactory.User({name: 'joe', id: 1});
var project = new ObjectFactory.Project({name: 'take care of the cat', id: 1})

project.user = user;
project.task1 = task1;
//
project.save();
RepoFactory.ProjectRepo.display();

// task1 = RepoFactory.TaskRepo.get({id: 1});
// var task2 = RepoFactory.Task.get(2);

// var user = RepoFactory.User.get(1);
// var project = RepoFactory.Project.get(1);

// task1.user = user;
// task1.project = project;

// task.save();
// task.complete();
