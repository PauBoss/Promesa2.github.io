var mensaje1 = console.log( "Cuenta realizada correctamente." );
var mensaje2 = console.log( "Prueba por consola de error." );

var totalTime = 6;
var totalTime2 = 60;

/**
 * Creo la función obtenerDatos que se encargará de devolver
 * un error dependiendo de la situación, como por ejemplo que la longitud sea igual a 0. 
 */
function temporizador(ms) {
	return new Promise( ( resolver, devolver ) => {
		if ( totalTime.lenght === 0 || totalTime2.lenght === 0 ) {
			devolver( new Error( mensaje2 ) );
		}

		setTimeout( ( ) => {
			resolver( mensaje1 );
		}, ms );
	} );
}

/**
 * Creo la función cuenta que se encargará de contar de 6 a 0, mostrando
 * 0 cuando acabe la cuenta.
 */
async function cuenta(numero, callback, element, interval=1000) {

	element.innerHTML = numero;
	while (numero != 0) {
		await temporizador(interval);
		element.innerHTML = --numero;
	}
	callback();
}

export {
  cuenta,
}