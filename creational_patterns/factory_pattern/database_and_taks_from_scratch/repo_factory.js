var repoFactory = function() {

  var repos = this;
  var repoList = [
    {name: 'taskRepo', source: './repos/task_repo' },
    {name: 'userRepo', source: './repos/user_repo' },
    {name: 'projectRepo', source: './repos/project_repo'}
  ];

  repoList.forEach(function(repo) {
    //here we run the source right when we get it because we are only
    //going to need one repo of each type, unlike objectFactory, we do
    //not want to make multiple instances of each repo.
    repos[repo.name] = require(repo.source)();// called right away
  });
};

module.exports = new repoFactory;
