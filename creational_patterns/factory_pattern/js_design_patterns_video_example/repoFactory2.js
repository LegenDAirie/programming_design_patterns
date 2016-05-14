var repoFactory = function(){

    //"this" is the object to be returned when the "new" keyword is used
    var repos = this;

    //creates an array of key and values(functions that will return a
    // repo object when ran )
    var repoList = [{name:'task', source:'./repos/taskRepository'},
                   {name:'user', source:'./repos/userRepository'},
                   {name:'project', source:'./repos/projectRepository'}];

    repoList.forEach(function(repo){
        // adds keys and values(object repos) to "this"
        repos[repo.name] = require(repo.source)()
    });

    //returns "this"(repos) implicitly
};


module.exports = new repoFactory;
