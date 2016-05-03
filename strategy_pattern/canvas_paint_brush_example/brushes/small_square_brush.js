'use strict';

(function(){
  var GLOB = window.GLOB = window.GLOB || {}

  var SMALLSQUAREBRUSH_PROTOTYPE = {
    draw: function(location){
      GLOB.context.beginPath();
      GLOB.context.rect(location.x, location.y, 10, 10)
      GLOB.context.fillStyle = 'rgba(0, 0, 0, .8)'
      GLOB.context.fill();
      GLOB.context.stroke();
    }
  }

  GLOB.smallSquareBrush = {
    create: function(){
      var brush = Object.create(SMALLSQUAREBRUSH_PROTOTYPE)

      return brush
    }
  }

})()
