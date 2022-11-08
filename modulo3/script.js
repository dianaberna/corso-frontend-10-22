console.log("ciao");
let variabile = 5;


if (variabile == 5) {
	console.log("la variabile ha valore di " + variabile);
	
}

let cose = ["sedia",4,"gatto"];

console.log("la lunghezza di array cose è "+cose.length + " elementi");

for(let i = 0;i < cose.length;i++){
		console.log("array cose contiene " + cose[i]);
	
}
//--------------------------------------
let numeroni=[2,6,9,10,-2,-3,0,2,5,1]
//-------------------------------------
let somma=0;
for(let i =0;i<numeroni.length;i++){

	somma=somma + numeroni[i];
	console.log("la somma dei numeroni è " + somma);
		
}
let secondo = 0;
for(let i = 0;i<numeroni.length;i++){
	secondo= secondo + numeroni[i];
	if(secondo == 2 ){
		console.log("ecco il numero 2 "+secondo);
	}
}
let n =0;
let numeraccio =0;
while(n < numeroni.lenght){	
	if (numeraccio % 2 == 0) {
		n++;
		console.log("questo è un numero pari " + numeraccio);
	}
}
let num=0;
let numeretto = 0;
while(num < numeroni.lenght){	
	if (numeretto % 2 != 0) {
		num++;
		console.log("questo è un numero dispari " + numeretto);
	}
}
let nu =0;
let numerello = 0;
while(nu < numeroni.lenght){
	if(numerello > 0){
		nu ++;
		console.log("questo è un numero positivo " + numerello)
	}
}
