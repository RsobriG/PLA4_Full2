/**
 Per evitar tenir que crear tantes llistes com fileres, el següent programa partirà d'un vector de 5x5 elements
 on els cinc primers representaran la primera filera. Repeteix l'exercici3 calculant la diagonal de la matriu 
 representada per aquest vestor
 */

var llistaFinal = [1,1,1,1,1,
				   2,2,2,2,2,
				   4,4,4,4,4,
				   7,7,7,7,7,
				   9,9,9,9,9];
var recorregutLlistes = 0;

// Funció per sumar la diagonal de una llista convertida en matriu
function sumaDiagonalLlistes (llistaFinal){
			sumaDiagonalLlistes=llistaFinal[0]+llistaFinal[6]+llistaFinal[12]+llistaFinal[18]+llistaFinal[24]; 	//sumem les posicions de la diagonal de la "matriu"	
	return sumaDiagonalLlistes;
}