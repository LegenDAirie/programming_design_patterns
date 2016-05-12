/* INSTANCE METHODS GO HERE */
var DUCK_PROTOTYPE = {
  performFly: function() {
    this.flyBehavior.fly()
  },

  performQuack: function() {
    this.quackBehavior.quack()
  },

  swim: function() {
    console.log("I am swimming!")
  },

  display: function() {
    console.log("")
  },

  setFlyBehavior: function(flyMethod) {
    this.flyBehavior = flyMethod
  }
}

/* CLASS METHODS GO HERE */
// var Duck = {
//   create: function () {
//     var duck = Object.create(DUCK_PROTOTYPE)
//
//     return duck;
//   }
// }

//////////////////////////////////////////////////////////////////

// var MALLARD_PROTOTYPE = Duck.create()

var Mallard = {
  create: function() {
    var mallardDuck = Object.create(DUCK_PROTOTYPE)

    mallardDuck.flyBehavior = FlyWithWings.create()
    mallardDuck.quackBehavior = Quack.create()

    return mallardDuck
  }
}
