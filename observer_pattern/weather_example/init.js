'use strict';

( function() {
	var GLB = window.GLB = window.GLB || {}
	GLB.canvas = document.getElementById("canvas")
	GLB.canvas.setAttribute("width", 500)
	GLB.canvas.setAttribute("height", 500)

	GLB.weatherStation = GLB.WeatherStation.create()
	// GLB.observer = GLB.Observer.create( GLB.weatherStation )
	// weatherStation.
	// var observe2 = GLB.Observer.create( weatherStation )

})()