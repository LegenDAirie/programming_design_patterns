var Repo = function() {
  var called = 0;

  var save = function() {
    called++;
    console.log('called ' + called + ' times');
  };

  return {
    save: save
  }
};

module.exports = Repo();
