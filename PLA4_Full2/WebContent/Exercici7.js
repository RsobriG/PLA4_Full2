/**
 Donada una matriu nxn com la de l'exercici 6, digues quants dels elements per sobre 
 de la diagonal son mes grans de 0, quants son mes petits de zero i quants son iguals a zero 
 */

var llistaFinal = [1,1,0,1,1,
				   2,2,0,2,2,
				   4,4,4,4,0,
				   7,7,7,7,7,
				   9,9,9,9,9];
var igualA0 = 0;
var majorA0 = 0;

//Funció per buscar els zeros trobats a la matriu i els valos majors a 0 i la quantitat trobada
function zeroEnMatriz (llistaFinal){
	if (llistaFinal [1] == 0){ //condicional en cas de trobar 0 a la pos1 de la matriu
		igualA0++;
	}else{	//en cas de no trobar un zero comptar el caràcter com major a zero
		majorA0++;
	}
	if (llistaFinal [2] == 0){ //el mateix condicional que el d'abans pero per la pos2
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [3] == 0){ //el mateix condicional que el d'abans pero per la pos3
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [4] == 0){//el mateix condicional que el d'abans pero per la pos4
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [7] == 0){//el mateix condicional que el d'abans pero per la pos7
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [8] == 0){//el mateix condicional que el d'abans pero per la pos8
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [9] == 0){//el mateix condicional que el d'abans pero per la pos9
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [13] == 0){//el mateix condicional que el d'abans pero per la pos13
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [14] == 0){//el mateix condicional que el d'abans pero per la pos14
		igualA0++;
	}else{
		majorA0++;
	}
	if (llistaFinal [19] == 0){//el mateix condicional que el d'abans pero per la pos19
		igualA0++;
	}else{
		majorA0++;
	}
	
	zeroEnMatriz = "<BR>"+igualA0+" numeros iguals a '0'"+"<BR>"+ "<BR>"+majorA0+" numeros majors a '0'"+"<BR>" ;
	
	return zeroEnMatriz;
}