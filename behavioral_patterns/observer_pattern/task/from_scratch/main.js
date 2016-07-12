var _ = require('../../../../utility/lodash');

var Task = require('./task');

var NotifyService = function() {
  var message = 'notifying ';

  this.update = function(task) {
    console.log(message + task.user + ' about task: ' + task.name);
  };
};

var LoggingService = function() {
  var message = 'logging ';

  this.update = function(task) {
    console.log(message + task.user + ' about task: ' + task.name);
  };
};

var AuditingService = function() {
  var message = 'auditing ';

  this.update = function(task) {
    console.log(message + task.user + ' about task: ' + task.name);
  };
};

// ObserverList
var ObserverList = function() {
  this.observerList = [];
};

ObserverList.prototype.addObserver = function(obj) {
  this.observerList.push(obj);
};

ObserverList.prototype.notify = function(task) {
  this.observerList.forEach(function(observer) {
    observer.update(task);
  });
};

// ObservableTask
var ObservableTask = function(data) {
  Task.call(this, data);
  this.observers = new ObserverList();
};

ObservableTask.prototype.notify = function() {
  console.log('notifying observers')
  this.observers.notify(this);
};

ObservableTask.prototype.save = function() {
  Task.prototype.save.call(this);
  this.notify();
};



var task = new ObservableTask({name:'feed the cat', user: 'steve'});

var not = new NotifyService();
var log = new LoggingService();
var aud = new AuditingService();

task.observers.addObserver(not);
task.observers.addObserver(log);
task.observers.addObserver(aud);

task.save();
//
// not.update(task);
// log.update(task);
// aud.update(task);
