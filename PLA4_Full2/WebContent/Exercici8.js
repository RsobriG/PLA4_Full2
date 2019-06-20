/**
 Donada la matriu de l'exercici7, retorna un vector on el primer element es la mitjana aritmètica
 de la primera columna d'acord a la següent formula: (a1+....+an )/n
 */

var matriu = [1,1,0,1,1,
			  2,2,0,2,2,
			  4,4,4,4,0,
			  7,7,7,7,7,
			  9,9,9,9,9];
var sumatori = 0;
var resultatMitjanaArit = [];


function mitjanaArit(matriu){
	for (var i=0; i<24; i++){
		if ((i==0)||(i==5)||(i==10)||(i==15)||(i==20)){
			sumatori += matriu[i];
			resultatMitjanaArit[0] = sumatori;
		}
		if ((i==1)||(i==6)||(i==11)||(i==16)||(i==21)){
			sumatori += matriu[i];
			resultatMitjanaArit[1] = sumatori;
		}
		if ((i==2)||(i==7)||(i==12)||(i==17)||(i==22)){
			sumatori += matriu[i];
			resultatMitjanaArit[2] = sumatori;
		}
		if ((i==3)||(i==8)||(i==13)||(i==18)||(i==23)){
			sumatori += matriu[i];
			resultatMitjanaArit[3] = sumatori;
		}
		if ((i==4)||(i==9)||(i==14)||(i==19)||(i==24)){
			sumatori += matriu[i];
			resultatMitjanaArit[3] = sumatori;
		}
	}
	
	mitjanaArit = resultatMitjanaArit[0] ;
	
	return mitjanaArit;
}



