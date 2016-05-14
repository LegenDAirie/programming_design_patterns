var repoFactory = function() {
  var repos = this;
  var repoList = [{name: "taskRepo", source: './repos/task_repo'},
                  {name: "user_repo", source: './repos/task_repo'},
                  {name: "project_repo", source: './repos/task_repo'}];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)()
  });
}

module.exports = new repoFactory
