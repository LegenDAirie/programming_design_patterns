var Repo = require('./module_pattern')

// from the js_constructor pattern

var Task = function(data){
  this.name = data.name;
  this.completed = false;

  // this.complete = function(){
  //   this.completed = true;
  //   console.log('completed task: ' + this.name);
  // }
  //
  // this.save = function(){
  //   console.log('saving task: ' + this.name);
  // }
};

// giving these instances access to these functions instad of giving them
// there own for efficientcy
Task.prototype.complete = function(){
  this.completed = true;
  console.log('completing task: ' + this.name);
};

Task.prototype.save = function(){
  console.log('saving task: ' + this.name);
  Repo.save(this);
};

// for use in node
module.exports = Task;
