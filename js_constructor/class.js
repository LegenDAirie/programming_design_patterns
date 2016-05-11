// ecmaScript 6
'use strict';

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    this.completed = true;
    console.log('completed task: ' + this.name);
  };

  save() {
    console.log('saving task: ' + this.name);
  };
}


var task1 = new Task('create a demo for constructors')
var task2 = new Task('create a demo for modules')
var task3 = new Task('create a demo for singltons')
var task4 = new Task('create a demo for prototypes')

task1.complete();
task2.save();
task3.save();
task4.save();
