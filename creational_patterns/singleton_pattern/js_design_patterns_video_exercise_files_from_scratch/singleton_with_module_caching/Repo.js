var Repo = function() {
  var called = 0;

  var save = function() {
    called++;
    console.log("repo saved: " + called + " times");
  }

  console.log('newing up a new task');
  return {
    save: save
  }
}

//running the function before exporting it will cause this to follow
//the singleton pattern since the module is cached after the first time
//it is ran
module.exports = new Repo;

//doing it this way will cause each other file requiring this in to end
//up producing a different instance
// module.exports = Repo;
