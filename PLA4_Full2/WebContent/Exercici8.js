/**
 Donada la matriu de l'exercici7, retorna un vector on el primer element es la mitjana aritmètica
 de la primera columna d'acord a la següent formula: (a1+....+an )/n
 */

var matriu = [1,1,3,1,3,		// matriu de 5x5
			  2,2,0,2,2,
			  4,4,4,4,0,
			  7,4,7,7,7,
			  9,9,9,9,5];
var sumatori = 0;
var resultatMitjanaArit = [0,0,0,0,0];


function mitjanaArit(matriu){
	//bucle que recórre les 24 posicions de la matriu
	for (var i=0; i<=24; i++){
		sumatori = 0;
		/* Si està a les posicions 0,5,10,15 o 20 suma el valor de les posicions 0,5,10,15 i 20 
		i la guarda a la posició0 de la matriu resultatMItjanaArit */
		if ((i==0)||(i==5)||(i==10)||(i==15)||(i==20)){
			sumatori = resultatMitjanaArit[0];
			sumatori += matriu[i];
			resultatMitjanaArit[0] = sumatori;
		}
		/*Si està a les posicions 1,6,11 o 21 suma el valor de les posicions 1,6,11 i 21
		i la guarda a la posoció 1 de la matriu resultatMitjanaArit*/
		if ((i==1)||(i==6)||(i==11)||(i==16)||(i==21)){
			sumatori = resultatMitjanaArit[1];
			sumatori += matriu[i];
			resultatMitjanaArit[1] = sumatori;
		}
		/*Si està a les posicions 2,7,12 o 22 suma el valor de les posicions 2,7,12 i 22
		i la guarda a la posoció 2 de la matriu resultatMitjanaArit*/
		if ((i==2)||(i==7)||(i==12)||(i==17)||(i==22)){
			sumatori = resultatMitjanaArit[2];
			sumatori += matriu[i];
			resultatMitjanaArit[2] = sumatori;
		}
		/*Si està a les posicions 3,8,13 o 23 suma el valor de les posicions 3,8,13 i 23
		i la guarda a la posoció 3 de la matriu resultatMitjanaArit*/
		if ((i==3)||(i==8)||(i==13)||(i==18)||(i==23)){
			sumatori = resultatMitjanaArit[3];
			sumatori += matriu[i];
			resultatMitjanaArit[3] = sumatori;
		}
		/*Si està a les posicions 4,9,14 o 24 suma el valor de les posicions 4,9,14 i 24
		i la guarda a la posoció 4 de la matriu resultatMitjanaArit*/
		if ((i==4)||(i==9)||(i==14)||(i==19)||(i==24)){
			sumatori = resultatMitjanaArit[4];
			sumatori += matriu[i];
			resultatMitjanaArit[4] = sumatori;
		}
	}
	//Divideix cada posició de la matriu resultat per 5
	resultatMitjanaArit[0] = resultatMitjanaArit[0]/5; //mitjana aritmètica de la primer columna
	resultatMitjanaArit[1] = resultatMitjanaArit[1]/5; //mitjana aritmètica de la segona columna
	resultatMitjanaArit[2] = resultatMitjanaArit[2]/5; //mitjana aritmetica de la tercera columna
	resultatMitjanaArit[3] = resultatMitjanaArit[3]/5; //mitjana aritmètica de la quarta columna
	resultatMitjanaArit[4] = resultatMitjanaArit[4]/5; //mitjana aritmètica de la cinquena columna
	
	//La matriu resultant la guardem a mitjanaArit
	mitjanaArit = resultatMitjanaArit;
	
	return mitjanaArit;
}



