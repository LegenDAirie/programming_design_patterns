'use strict';

(function(){
  var GLOB = window.GLOB = window.GLOB || {}

  var BIGCIRCLEBRUSH_PROTOTYPE = {
    draw: function(location){
      GLOB.context.beginPath();
      GLOB.context.arc(location.x, location.y, 50, 0, 2 * Math.PI, false)
      GLOB.context.fillStyle = 'rgba(0, 0, 0, .8)'
      GLOB.context.fill();
      GLOB.context.stroke();
    }
  }


  GLOB.BigCircleBrush = {
    create: function(){
      var brush = Object.create(BIGCIRCLEBRUSH_PROTOTYPE)

      return brush
    }
  }

})()
