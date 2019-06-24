/**
 Donada una cadena de caràcters contar el número de A`s de B's...
 i posar-ho en una llista, on l'element numero 0 correspon a les A's
 */



var contadorCaracteres = 0;
var ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var caractersRepetits = [];

// funció per comptar els caràcters repetits de la cadena
function contarCaracter(cadena){				
	for (var i=0; i<ABC.length; i++){				//Bucle per recórrer tot l'abecedari (constant ABC)
		contadorCaracters = 0;						// reiniciem la variable contadorCaracters cada vegada que volem mirar un caràcter de la cadena
		for (var j=0; j<cadena.length; j++){		// Bucle per recórrer cada caràcter de la cadena i compararlo amb cada caràcter de l'abecedari
			if (cadena[j] == ABC[i]){				// condicional que hi entrem en cas de que la lletra de la constant de l'abecedari sigui igual a la lletra de la cadena
				contadorCaracters++;				// sumem un digit a contador caràcter
				caractersRepetits[i] = "<BR>"+"La lletra "+ABC[i]+" esta repetida "+contadorCaracters+ " vegades"+ "<BR>";	//enviem a fora de la funció un text amb la lletra del abecedari trobada dins la cadena i indiquem les vegades que s'ha repetit dintre de la cadena
			}
		}
	}
	return caractersRepetits;	
}
