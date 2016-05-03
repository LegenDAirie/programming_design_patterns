'use strict';

(function() {

	var GLOB = window.GLOB = window.GLOB || {}

	var PAINT_PROTOTYPE = {
		start: function() {
			setInterval(this.tick.bind(this), 1000/30)
			GLOB.canvas.addEventListener('mousemove', this.cursor.updateLocation.bind(this.cursor) )
		},

		tick: function() {
			this.cursor.performDraw()
		}
	}

	GLOB.Paint = {
		create: function() {
			var paint = Object.create(PAINT_PROTOTYPE)
			paint.cursor = GLOB.Cursor.create()

			return paint;
		}
	}
})()
