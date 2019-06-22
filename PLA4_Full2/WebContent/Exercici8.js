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
	for (var i=0; i<=24; i++){
		sumatori = 0;
		if ((i==0)||(i==5)||(i==10)||(i==15)||(i==20)){
			sumatori = resultatMitjanaArit[0];
			sumatori += matriu[i];
			resultatMitjanaArit[0] = sumatori;
		}
		if ((i==1)||(i==6)||(i==11)||(i==16)||(i==21)){
			sumatori = resultatMitjanaArit[1];
			sumatori += matriu[i];
			resultatMitjanaArit[1] = sumatori;
		}
		if ((i==2)||(i==7)||(i==12)||(i==17)||(i==22)){
			sumatori = resultatMitjanaArit[2];
			sumatori += matriu[i];
			resultatMitjanaArit[2] = sumatori;
		}
		if ((i==3)||(i==8)||(i==13)||(i==18)||(i==23)){
			sumatori = resultatMitjanaArit[3];
			sumatori += matriu[i];
			resultatMitjanaArit[3] = sumatori;
		}
		if ((i==4)||(i==9)||(i==14)||(i==19)||(i==24)){
			sumatori = resultatMitjanaArit[4];
			sumatori += matriu[i];
			resultatMitjanaArit[4] = sumatori;
		}
	}
	resultatMitjanaArit[0] = resultatMitjanaArit[0]/25;
	resultatMitjanaArit[1] = resultatMitjanaArit[1]/25;
	resultatMitjanaArit[2] = resultatMitjanaArit[2]/25;
	resultatMitjanaArit[3] = resultatMitjanaArit[3]/25;
	resultatMitjanaArit[4] = resultatMitjanaArit[4]/25;
	mitjanaArit = resultatMitjanaArit;
	
	return mitjanaArit;
}



