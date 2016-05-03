var FLYWITHWINGS_PROTOTYPE = {
 fly: function () {
   console.log("i'm flying!")
 }
}

var FlyWithWings = {
 create: function () {
   var flyWithWings = Object.create(FLYWITHWINGS_PROTOTYPE)

   return flyWithWings
 }
}
/////////////////////////////////////////////////////////////////
var FLYNOWINGS_PROTOTYPE = {
 fly: function () {
   console.log("i'm not flying jerk!")
 }
}

var FlyNoWings = {
 create: function () {
   var flyWithWings = Object.create(FLYNOWINGS_PROTOTYPE)

   return flyWithWings
 }
}
