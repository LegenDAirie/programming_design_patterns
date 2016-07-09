var TaskRepo = (function() {
  var repo;

  var createRepo = function() {
    repo = new Object('repo');
  };

  var getInstance = function() {
    if (!repo) {
      console.log('creating repo');
      createRepo();
    }
    return repo
  };

  return {
    getInstance: getInstance
  }
})();

var task1 = TaskRepo.getInstance();
var task2 = TaskRepo.getInstance();


if (task1 === task2) {
  console.log('they are the same');
} else {
  console.log('they are not the same');
}
