MyLodash = {
	remove: function( array, booleanFunction ) {

		for ( var i = 0; i < array.length; i++ ) {
			if (booleanFunction( array[i] )) {
				array.splice(i , 1)
				return
			}
		}
	}
	
}