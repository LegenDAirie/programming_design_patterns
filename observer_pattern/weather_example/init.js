'use strict';

(function() {
	var GLB = window.GLB = window.GLB || {}

	GLB.weatherStation = GLB.WeatherStation.create()
	console.log("( 1 ) get initialize Measures with no observers --" )
	GLB.weatherStation.setMeasurementsChanged(65, 40, 30) // change measurements with no observers ( no visual output )
	console.log("\n( 2 ) no output because there are no observers --" )
	GLB.observer = GLB.Observer.create( "observer", GLB.weatherStation ) // create new Observer
	console.log("\n\n( 3 ) add a new observer --" )
	console.log("( 4 ) set new measurements --" )
	GLB.weatherStation.setMeasurementsChanged(67, 45, 34) // update measurements, GLB.observer displays results
	console.log("\n\n( 5 ) add a new observer --" )
	console.log("( 6 ) set new measurements --" )
	GLB.observerTwo = GLB.Observer.create( "observerTwo", GLB.weatherStation ) // create new Observer -- GLB.observerTwo
	GLB.weatherStation.setMeasurementsChanged(75, 52, 44) // update measurements, GLB.observer and GLB.observerTwo display results
	console.log("\n( 7 ) remove observer from watching --" )
	console.log("( 8 ) set new measurements --" )
	GLB.weatherStation.removeObserver( GLB.observer ) // remove GLB.observer from watching weatherStation
	GLB.weatherStation.setMeasurementsChanged(72, 48, 42) // update measurements, GLB.observerTwo display results
	
})()