/**
 Donada la cadena 00112233333445555666678889, 
 contar els numeros mes grans del valor introduït per teclat
 */


var numUsuari = prompt("Introduir un numero del 0 al 9: " , "");
var contadorNum = 0;

function contarNum (cadena){
	for (var i=0; i<cadena.length; i++){
		if (cadena[i] > numUsuari){
			contadorNum = cadena.length - i;
			break;
		}
	}
	return contadorNum;
}