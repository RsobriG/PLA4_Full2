/**
Donades cinc llistes amb cinc elements, la primera llista representa la primera filera de la matriu 5x5.
Es demana fer la suma dels elements de la diagonal. 
 */


var llista1 = [1,1,1,1,1];
var llista2 = [2,2,2,2,2];
var llista3 = [4,4,4,4,4];
var llista4 = [7,7,7,7,7];
var llista5 = [9,9,9,9,9];

//Funció per realitzar la suma de la diagonal de les 5 llistes
function sumaDiagonalLlistes (llista1, llista2, llista3, llista4, llista5){
			sumaDiagonalLlistes = llista1[0]+llista2[1]+llista3[2]+llista4[3]+llista5[4];	//sumem la posició de cada llista corresponent a la suma de la diagonal		
	return sumaDiagonalLlistes;
}

/*
Aquest exercici és millorable ja que si s'amplia la llista de la matriu no funcionaria. Però com a l'exercici indica
5 llistes fixes, no cal fer una funció més complexa
*/