
var Task = function(name){
  this.name = name;
  this.completed = false;

  // this.complete = function(){
  //   this.completed = true;
  //   console.log('completed task: ' + this.name);
  // }
  //
  // this.save = function(){
  //   console.log('saving task: ' + this.name);
  // }
}

// giving these instances access to these functions instad of giving them
// there own for efficientcy
Task.prototype.complete = function(){
  this.completed = true;
  console.log('completed task: ' + this.name);
}

Task.prototype.save = function(){
  console.log('saving task: ' + this.name);
}

var task1 = new Task('create a demo for constructors')
var task2 = new Task('create a demo for modules')
var task3 = new Task('create a demo for singltons')
var task4 = new Task('create a demo for prototypes')

task1.complete();
task2.save();
task3.save();
task4.save();
