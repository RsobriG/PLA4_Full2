/**
 Donat un vector de nxn elements on els n primers son la primera filera d'una matriu,
 els elements desde n+1 fins 2n els de la segona filera i així succesivament,
 calcula la suma de la seva diagonal. Asegure't que la matriu és quadrada
 */

var llistaFinal = [1,1,1,1,1,
				   2,2,2,2,2,
				   4,4,4,4,4,
				   7,7,7,7,7,
				   9,9,9,9,9];
var matriunxn = [];
var tamanyMatriunxn = prompt("Indica el tamany de la matriu (min 2x2, max 5x5): ", "");


function sumaDiagonalMatriunxn (matriunxn){
	if (tamanyMatriunxn == 2){
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[5],llistaFinal[6]];
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[3];	
	}
	if (tamanyMatriunxn == 3){
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[2],llistaFinal[5],llistaFinal[6],llistaFinal[7],llistaFinal[10],llistaFinal[11],llistaFinal[12]];
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[4]+matriunxn[8];	
	}
	if (tamanyMatriunxn == 4){
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[2],llistaFinal[3],llistaFinal[5],llistaFinal[6],llistaFinal[7],llistaFinal[8],llistaFinal[10],llistaFinal[11],llistaFinal[12],llistaFinal[13],llistaFinal[15],llistaFinal[16],llistaFinal[17],llistaFinal[18]];
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[5]+matriunxn[10]+matriunxn[15];	
	}
	if (tamanyMatriunxn == 5){
		sumaDiagonalMatriunxn = llistaFinal[0]+llistaFinal[6]+llistaFinal[12]+llistaFinal[18]+llistaFinal[24]; 	
	}
		
	return sumaDiagonalMatriunxn;
}