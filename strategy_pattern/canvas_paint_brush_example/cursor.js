'use strict';

( function(){
	var GLOB = window.GLOB = window.GLOB || {}

	var CURSOR_PROTOTYPE = {
		performDraw: function(){
			this.brush.draw(this.location)
		},

		updateLocation: function(event){
			this.location = {
				x: event.x,
				y: event.y
			}
		},

		setBrushType: function(brush){
			this.brush = brush
		}
	}

	GLOB.Cursor = {
		create: function() {
			var cursor = Object.create(CURSOR_PROTOTYPE)

			cursor.location = {x: 0, y: 0}
			console.log('cat1')
			cursor.brush = GLOB.smallSquareBrush.create()

			return cursor;
		}
	}

}) ()
