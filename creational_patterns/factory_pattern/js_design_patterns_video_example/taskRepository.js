var repo = function () {

    //access to this is restricted to get() and save()
    var db = {};

    var get = function (id) {
        console.log('Getting task ' + id);

        //would normally search the db for the element, return it and
        // stick it in an object
        //returns a Json data(used to create an object)
        return {
            name: 'new task from db'
        }
    }

    var save = function (task) {

      //would normally store the task in the database here
        console.log('Saving ' + task.name + ' to the db');
    }

    console.log('newing up task repo');

    return {
        get: get,
        save: save
    }
}

module.exports = repo;
