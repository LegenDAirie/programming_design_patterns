
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

// for use in node
module.exports = Task;
