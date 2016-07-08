var repoFactory = function() {
  var repos = this;
  var repoList = [
    {name: 'TaskRepo', source: './repos/task_repo'},
    {name: 'UserRepo', source: './repos/user_repo'},
    {name: 'ProjectRepo', source: './repos/project_repo'}
  ];


  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source);
  });
};

module.exports = new repoFactory;
