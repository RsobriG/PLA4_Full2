/**
 Donada la cadena 00112233333445555666678889, 
 contar els numeros mes grans del valor introduït per teclat
 */


var numUsuari = prompt("Introduir un numero del 0 al 9: " , "");
var contadorNum = 0;

// Es crea funció per comptar els numeros més grans de l'escollit per l'usuari
function contarNum (cadena){
	for (var i=0; i<cadena.length; i++){ 		//S'utilitza el bucle for per recórrer tota la cadena
		if (cadena[i] > numUsuari){				// si es troba el numero indicat per l'usuari a la cadena s'entra a la condició
			contadorNum = cadena.length - i;	// al entrar a la condició es resta la longitud de la cadena menys el últim numero trobat a la cadena igual al insertat per l'usuari
			break;								// al entrar a la condició fem un break per sortir-hi
		}
	}
	return contadorNum;							
}