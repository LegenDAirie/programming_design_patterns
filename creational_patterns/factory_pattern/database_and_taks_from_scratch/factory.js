var repoFactory = function() {
  var repos = this;
  var repoList = [
    {name: 'taskRepo', source: './repos/task_repo' },
    {name: 'userRepo', source: './repos/user_repo' },
    {name: 'projectRepo', source: './repos/project_repo'}
  ];

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source)();
  });
};

module.exports = new repoFactory;
