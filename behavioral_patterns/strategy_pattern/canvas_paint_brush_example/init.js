'use strict';

(function() {
	var GLOB = window.GLOB = window.GLOB || {}

	GLOB.canvas = document.getElementById("canvas");
	GLOB.canvas.setAttribute("width", window.innerWidth );
	GLOB.canvas.setAttribute("height", window.innerHeight );

	GLOB.context = GLOB.canvas.getContext("2d");

	GLOB.paint = GLOB.Paint.create();
	GLOB.paint.start();

})()
