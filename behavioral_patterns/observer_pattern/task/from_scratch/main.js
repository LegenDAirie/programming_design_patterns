var _ = require('../../../../utility/lodash');

var Task = require('./task');

var notificationService = function() {
  var message = "Notifying ";
  this.update = function(task) {
    console.log(message + task.user + ' for task' + task.name);
  };
};

var loggingService = function() {
  var message = "Logging ";
  this.update = function(task) {
    console.log(message + task.user + ' for task' + task.name);
  };
};

var auditingService = function() {
  var message = "Auditing ";
  this.update = function(task) {
    console.log(message + task.user + ' for task' + task.name);
  };
};

function ObserverList() {
  this.observerList = [];
};

ObserverList.prototype.add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.count = function() {
  return this.observerList.length;
};

ObserverList.prototype.removeObserver = function(observerToRemove) {
  _.remove(this.observerList, function(observer) {
    return observer === observerToRemove;
  });
};

// observerList.prototype.indexOf = function(objext) {
//
// };

var ObservableTask = function(data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer) {
  this.observers.add(observer);
};

ObservableTask.prototype.notify = function(context) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i)(context)
  }
};

ObservableTask.prototype.save = function() {
  this.notify(this);

  Task.prototype.save.call(this);
};

ObservableTask.prototype.removeObserver = function(observer) {
  this.observers.removeObserver(observer)
};



var task1 = new ObservableTask({name: 'create a demo for constructor', user: 'Someone'});

var notification = new notificationService();
var log = new loggingService();
var audit = new auditingService();

task1.addObserver(notification.update);
task1.addObserver(log.update);
task1.addObserver(audit.update);

task1.save();
console.log('/////////////////////////////////////////////////////////////////////')

task1.removeObserver(audit.update);
task1.save();
