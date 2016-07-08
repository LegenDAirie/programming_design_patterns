//just going back over stuff

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    console.log('completeing task: ' + this.name);
    this.completed = true;
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


var Task = funtion() {

  var privateVariable = "you can't see me";

  return {
    showPrivateVariable: function() {
      console.log(privateVariable);
    },

    complete: function() {

    }
  }
};

var Task = Task();
