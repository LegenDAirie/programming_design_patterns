var _ = require('../../../utility/lodash');

var Task = require('./task');

var notificationService = function () {
    var message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};
var loggingService = function () {
    var message = 'Logging '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
}
var auditingService = function () {
    var message = 'Auditing '
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

var Mediator = (function() {
  var channels = {};

  var subscribe = function(channel, context) {
    if (!channels[channel]) {
      channels[channel] = [];
    }

    channels[channel].push(context);
  };

  var publish = function(channel) {
    if (channels[channel]) {
      channels[channel].forEach(function(observer) {
        observer.update(observer);
      });
    }
  };

  var remove = function(channel, observerToRemove) {
    if (channels[channel]) {
      _.remove(channels[channel], function(observer) {
        return observer === observerToRemove;
      });
    }
  };

  var count = function() {
    return channels.length;
  };

  return {
    subscribe: subscribe,
    publish: publish,
    count: count,
    remove: remove
  }
})();

var task1 = new Task({
    name: 'create a demo for mediators',
    user: 'Jon'
});

task1.save = function() {
  Task.prototype.save.call(this);
  Mediator.publish(this);
};

var not = new notificationService();
var ls = new loggingService();
var audit = new auditingService();

// console.log(Mediator.count());

task1.save();

Mediator.subscribe(task1, not);
Mediator.subscribe(task1, ls);
Mediator.subscribe(task1, audit);

task1.save();

Mediator.remove(task1, ls);
Mediator.remove(task1, audit);

task1.save();

task1.complete();
