/**
Donades cinc llistes amb cinc elements, la primera llista representa la primera filera de la matriu 5x5.
Es demana fer la suma dels elements de la diagonal. 
 */


var llista1 = [1,1,1,1,1];
var llista2 = [2,2,2,2,2];
var llista3 = [4,4,4,4,4];
var llista4 = [7,7,7,7,7];
var llista5 = [9,9,9,9,9];


function sumaDiagonalLlistes (llista1, llista2, llista3, llista4, llista5){
			sumaDiagonalLlistes = llista1[0]+llista2[1]+llista3[2]+llista4[3]+llista5[4];			
	return sumaDiagonalLlistes;
}