//needs to be imidiately invoked so TaskRepo uses the same taskRepo for
//all instances.
var TaskRepo = (function() {

  var taskRepo;

  //it is possible to just create the taskRepo object in the getInstance
  //method but using a function here makes it clearer what's going on
  function createRepo() {
    taskRepo = new Object();
    return taskRepo
  }


  return {
    getInstance: function() {
      if (!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  }
})();

var taskRepo1 = TaskRepo.getInstance();
var taskRepo2 = TaskRepo.getInstance();

if (taskRepo1 === taskRepo2) {
  console.log("same repos");
}

//when using something like node.js the requiring in a file makes the
//singleton pattern a bit easier because modules are cached after the
//first time they are loaded.
