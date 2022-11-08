var array = [2,6,9,10,-2,-3,0,2,5,1];

/*--------ES 1------------*/
/*-------STAMPA TUTTI GLI ELEMENTI DELL'ARRAY----------*/

var i;
for(i=0; i<array.length; i++){
    document.write(array[i] + "<br>");
}

/*--------ES 2------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI DELL'ARRAY----------*/

var somma=0;
for(i=0; i<array.length;i++){
    somma+=array[i];  
}
document.write("La somma è " + " " + somma + "<br>");

/*--------ES 3------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI DISPARI DELL'ARRAY----------*/
var sommaDispari=0;
for(i=0;i<array.length;i++){
   if((array[i]%2) != 0)
    sommaDispari+=(array[i]); 
   }
   document.write("La somma dispari è " + " " + sommaDispari + "<br>");

/*--------ES 4------------*/
/*-------STAMPARE LA SOMMA DI TUTTI GLI ELEMENTI NELLE POSIZIONI PARI DELL'ARRAY----------*/

var sommaPosizioniPari=0;
for(i=0;i<array.length;i++){
   if((i%2) == 0)
    sommaPosizioniPari+=(array[i]); 
   }
   document.write("La somma delle posizioni pari è " + " " + sommaPosizioniPari + "<br>");

/*--------ES 5------------*/
/*-------STAMPARE QUANTE VOLTE COMPARE IL NUMERO DUE----------*/

var numeroVolte=0;
for(i=0;i<array.length;i++){
    if(array[i] == 2)
    numeroVolte++;
    }
    document.write("Il numero 2 appare" + " " + numeroVolte + " " + "volte <br>");

/*--------ES 6------------*/
/*-------STAMPARE QUANTI NUMERI POSITIVI (COMPRESO LO ZERO) CI SONO NELL'ARRAY----------*/

var numeroVolteParu=0;
for(i=0;i<array.length;i++){
    if((array[i]%2) == 0)
    numeroVolte++;
    }
    document.write("Ci sono" + " " + numeroVolte + " " + "numeri positivi <br>");

/*--------ES 7------------*/
/*-------STAMPARE IL NUMERO MASSIMO----------*/

var numeroMassimo = 0;
for(i=0;i<array.length;i++){
    if(array[i] >= numeroMassimo )
    numeroMassimo=array[i];
    }
    document.write("Il numero massimo è" + " " + numeroMassimo + "<br>");

/*--------ES 8------------*/
/*-------STAMPARE IL NUMERO MINIMO----------*/

var numeroMinimo = 0;
for(i=0;i<array.length;i++){
    if(array[i] <= numeroMinimo )
    numeroMinimo=array[i];
    }
    document.write("Il numero minimo è" + " " + numeroMinimo + "<br>");    

/*--------ES 9------------*/
/*-------STAMPARE IL NUMERO MINIMO----------*/
var arrayNegativo = [];
for(i=0;i<array.length;i++){
    if(array[i] < 0)
    arrayNegativo.push(array[i]);
    }
    document.write("Array correttamente creato! <br>"); 
    document.write("Array negativo: <br>");   
    for(i=0; i<arrayNegativo.length; i++){
        
        document.write(arrayNegativo[i] + "<br>");
    }

/*--------ES 10------------*/
/*-------CREARE UN NUOVO ARRAY DOVE OGNI ELEMENTO DEL NUOVO è UGUALE AL DOPPIO DEL DATO----------*/

var arrayDoppio = [];
for(i=0;i<array.length;i++){
    arrayDoppio.push(array[i]*2);
    }
    document.write("Array correttamente creato! <br>"); 
    document.write("Array doppio: <br>");   
    for(i=0; i<arrayDoppio.length; i++){
        document.write(arrayDoppio[i] + "<br>");
    }

/*--------ES 11------------*/
/*-------CREARE UN NUOVO ARRAY in CUI INSERISCO DUE VOLTE ( una di seguito l'altra) L'ARRAY DATO----------*/
var j=0;
var arrayRipetuto=[];
for(j=0;j<=1;j++){
    for(i=0;i<array.length;i++){
        arrayRipetuto.push(array[i]);
}   
    }
    document.write("Array correttamente creato! <br>"); 
    document.write("Array ripetuto: <br>");   
    for(i=0; i<arrayRipetuto.length; i++){
        document.write(arrayRipetuto[i] + "<br>");   
    } 

/*--------ES 12------------*/
/*-------Stampare al contrario gli elementi dell’array----------*/
document.write("Array al contrario: <br>");
for(i=(array.length-1); i>=0; i--){
    document.write( array[i] + "<br>");  
}
