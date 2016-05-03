'use strict';

(function() {
	var GLB = window.GLB = window.GLB || {}
	console.log("before WEATHERSTATION_PROTOTYPE")

	{console.log("hello")}

	var WEATHERSTATION_PROTOTYPE = {
		
		registerObserver: function( observer ) {
			console.log("hello prototype")
			this.observers.push( observer );
		},

		removeObserver: function( observer ) {
		// remove function from lodash.js
			_.remove( this.observers, function( thing ) { 
				return thing === observer 
			});
		},

		notifyObservers: function ( observer ) {
			var self = this
			// this.observers.push({ update:function(x, y, z){
			// 		console.log("updated")
			// 	}
			// })			

			this.observers.forEach( function ( thing ) {
				console.log("\n")
				thing.update( self.temperature, self.humidity, self.pressure )
			});

		},

		measurementsChanged: function() {
				this.notifyObservers()
		},

		setMeasurementsChanged: function( newTemperature, newHumidity, newPressure ) {
			this.temperature = newTemperature
			this.humidity = newHumidity
			this.pressure = newPressure
			this.measurementsChanged()
		}
	}

	GLB.WeatherStation = {

	create: function () {
			console.log("before weatherStation create")
			var weatherStation = Object.create(WEATHERSTATION_PROTOTYPE)
			
			weatherStation.observers = []
			// var temperature = null
			// var humidity = null
			// var pressure = null

			weatherStation.temperature = null
			weatherStation.humidity = null
			weatherStation.pressure = null

			return weatherStation
		} 

	}
})()


