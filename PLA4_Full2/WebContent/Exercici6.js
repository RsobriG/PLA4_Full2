/**
 Donat un vector de nxn elements on els n primers son la primera filera d'una matriu,
 els elements desde n+1 fins 2n els de la segona filera i així succesivament,
 calcula la suma de la seva diagonal. Asegure't que la matriu és quadrada
 */

var llistaFinal = [1,1,1,1,1,2,2,2,2,2,4,4,4,4,4,7,7,7,7,7,9,9,9,9,9];
var matriunxn = [];
var tamanyMatriunxn = prompt("Indica el tamany de la matriu (min 2x2, max 5x5): ", "");


function sumaDiagonalMatriunxn (matriunxn){
//	for (var i=0; i<tamanymatriunxn; i++){
//		if (tamanyMatrinxn == i){
				llistaFinal = llistaFinal.slice(0,tamanyMatriunxn);
				
				sumaDiagonalMatriunxn = llistaFinal;

			
//		}
//	}	
	
	return sumaDiagonalMatriunxn;
}