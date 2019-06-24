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

// Funció per sumar la diagonal de la matriu escollida per l'usuari
function sumaDiagonalMatriunxn (matriunxn){
	if (tamanyMatriunxn == 2){ //condicional que s'hi entra en cas que l'usuari vulgui una matriu de 2x2
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[5],llistaFinal[6]]; //es crea una matriu de 2x2 amb tots els valors de la matriu extrets de la llistaFinal
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[3];	 //es sumen els valors corresponents de la diagonal de la matriu 2x2
	}
	if (tamanyMatriunxn == 3){ //condicional que s'hi entra en cas que l'usuari vulgui una matriu de 3x3
		//es crea una matriu de 3x3 amb tots els valors de la matriu extrets de la llistaFinal
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[2],llistaFinal[5],llistaFinal[6],llistaFinal[7],llistaFinal[10],llistaFinal[11],llistaFinal[12]];
		//es sumen els valors corresponents de la diagonal de la matriu 3x3
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[4]+matriunxn[8];	
	}
	if (tamanyMatriunxn == 4){ //condicional que s'hi entra en cas que l'usuari vulgui una matriu de 4x4
		// es crea una matriu de 4x4 amb tots els valors de la matriu extrets de la llistaFinal
		matriunxn = [llistaFinal[0],llistaFinal[1],llistaFinal[2],llistaFinal[3],llistaFinal[5],llistaFinal[6],llistaFinal[7],llistaFinal[8],llistaFinal[10],llistaFinal[11],llistaFinal[12],llistaFinal[13],llistaFinal[15],llistaFinal[16],llistaFinal[17],llistaFinal[18]];
		//es sumen els valors corresponents de la diagonal de la matriu 4x4
		sumaDiagonalMatriunxn =  matriunxn[0]+matriunxn[5]+matriunxn[10]+matriunxn[15];	
	}
	if (tamanyMatriunxn == 5){ //condicional que s'hi entra en cas que l'usuari vulgui una matriu de 5x5
		//es sumen els valors de la matriu de 5x5 que és l amateixa matriu que la llitsaFinal
		sumaDiagonalMatriunxn = llistaFinal[0]+llistaFinal[6]+llistaFinal[12]+llistaFinal[18]+llistaFinal[24]; 	
	}
		
	return sumaDiagonalMatriunxn;
}