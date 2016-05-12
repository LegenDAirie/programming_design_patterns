'use strict';

(function() {
	var GLB = window.GLB = window.GLB || {}
	
	var WEATHERSTATION_PROTOTYPE = {
		
		registerObserver: function( observer ) {
			this.observers.push( observer );
		},

		removeObserver: function( observer ) {
		// remove function from utility/lodash.js
			_.remove( this.observers, function( thing ) { 
				return thing === observer 
			});
		},

		notifyObservers: function ( observer ) {
			var self = this
			
			this.observers.forEach( function ( thing ) {
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
			var weatherStation = Object.create(WEATHERSTATION_PROTOTYPE)
			
			weatherStation.observers = []
			
			weatherStation.temperature = null
			weatherStation.humidity = null
			weatherStation.pressure = null

			return weatherStation
		} 

	}
})()


