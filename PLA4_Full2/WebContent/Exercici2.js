/**
 Donada una cadena de caràcters contar el número de A`s de B's...
 i posar-ho en una llista, on l'element numero 0 correspon a les A's
 */



var contadorCaracteres = 0;
var ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var caractersRepetits = [];

function contarCaracter(cadena){
	for (var i=0; i<ABC.length; i++){
		contadorCaracters = 0;
		for (var j=0; j<cadena.length; j++){
			if (cadena[j] == ABC[i]){
				contadorCaracters++;
				caractersRepetits[i] = "<BR>"+"La lletra "+ABC[i]+" esta repetida "+contadorCaracters+ " vegades"+ "<BR>";
			}
		}
	}
	return caractersRepetits;	
}
