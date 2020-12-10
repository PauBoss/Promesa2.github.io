var mensaje1 = console.log( "Cuenta realizada correctamente." );
var mensaje2 = console.log( "Prueba por consola de error." );

var totalTime = 6;
var totalTime2 = 60;

/**
 * Creo la función obtenerDatos que se encargará de devolver
 * un error dependiendo de la situación, como por ejemplo que la longitud sea igual a 0. 
 */
const temporizador = ( ) => {
	return new Promise( ( resolver, devolver ) => {
		if ( totalTime.lenght === 0 || totalTime2.lenght === 0 ) {
			devolver( new Error( mensaje2 ) );
		}

		setTimeout( ( ) => {
			resolver( mensaje1 );
		}, 1000 );
	} );
}

/**
 * Creo la función cuenta que se encargará de contar de 6 a 0, mostrando
 * 0 cuando acabe la cuenta.
 */
async function cuenta( ) {
	document.getElementById( 'countdown' )
	.innerHTML = totalTime;
	if ( totalTime == 0 ) {
		document.getElementById( 'countdown' )
		.innerHTML = "0";
	} else {
		totalTime -= 1;
		setTimeout( "cuenta()", 1000 );
	}
}

/**
 * Creo la función cuenta2 que se encargará de contar de 60 a 0, mostrando
 * FIN cuando acabe la cuenta.
 */
async function cuenta2( ) {
	document.getElementById( 'countdown2' )
	.innerHTML = totalTime2;
	if ( totalTime2 == 0 ) {
		document.getElementById( 'countdown2' )
		.innerHTML = "FIN";
	} else {
		totalTime2 -= 1;
		setTimeout( "cuenta2()", 100 );
	}
}

cuenta( );
cuenta2( );
