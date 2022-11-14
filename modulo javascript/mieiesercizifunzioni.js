// ES. Moltiplicazione di due numeri
console.log(`ES. Moltiplicazione di due numeri`)

function moltiplicazione(numero1,numero2){
    
    return numero1*numero2
}

console.log(moltiplicazione(3,2))
console.log(moltiplicazione(-3,-6))
console.log(moltiplicazione(7,3))

// ES. Convertire anni in giorni
console.log(`ES. Convertire anni in giorni`)

function etàgiorni(etàanni){
    return etàanni*365;
}

console.log(etàgiorni(65))
console.log(etàgiorni(0))
console.log(etàgiorni(20))

// ES. Minore o uguale a zero
//Crea una funzione che accetta un numero come unico argomento 
//e restituisce true se è minore o uguale a zero, altrimenti restituisce false.

console.log(`ES. Minore o uguale a zero`)

function minoreUgualeAZero(numero){
    if(numero<=0){
        return true;
    }else{ return false;}
}

console.log(minoreUgualeAZero(5))
console.log(minoreUgualeAZero(0))
console.log(minoreUgualeAZero(-2))


//ES. Il problema della fattoria
console.log(`ES. Il problema della fattoria`)

let arraynumeroanimali=[];
function numeroZampe(arraynumeroanimali){
    let i=0;
    let arrayzampe=[2,4,4];
    let iz=0;
    let moltiplicazampe=[];
    let j=0;
    while(i<arraynumeroanimali.length){
        moltiplicazampe[j]=arrayzampe[iz]*arraynumeroanimali[i];
        iz++;
        i++;
        j++
    } console.log(moltiplicazampe);
    let sommazampe=0;
    j=0;
    while(j<moltiplicazampe.length){
        sommazampe=sommazampe+moltiplicazampe[j];
        j++;
    }
    return sommazampe;
}

console.log(numeroZampe([2,3,5]))
console.log(numeroZampe([1,2,3]))
console.log(numeroZampe([5,2,8]))

function numeroZampe(polli, mucche, maiali) {
    return polli * 2 + (mucche + maiali) * 4;
}
console.log(numeroZampe(2, 3, 5));
console.log(numeroZampe(1, 2, 3));
console.log(numeroZampe(5, 2, 8));





// ES. Case di fiammiferi
console.log(`ES. Case di fiammiferi`)

function numerofiammiferi(casetta){
    if(casetta==0)
    return 0
    fiammiferi=6;
    numero=casetta-1;
    return fiammiferi*casetta-numero}

console.log(numerofiammiferi(1))
console.log(numerofiammiferi(4))
console.log(numerofiammiferi(87))

//ES. Somma i numeri da un unico numero
console.log(`ES. Somma i numeri da un unico numero`)

function somma_daNumero(num){
    somma = num;
    num = num-1;
    while(num>0){
      somma = somma + num;
      num--;
    }
    return somma;
  }

  function sommaDaUnUnicoNumero(num) {
    i = 0;
    while (i < num) {
      x = num;
      num = num + (num - x);
      return num;
    };
  };
  

//ES. Trova lo sconto
console.log(`ES.Trova lo sconto`)
function trovaSconto(prezzointero,percentuale){
    let sconto=(prezzointero*percentuale)/100;
    return prezzointero-sconto
} 

console.log(trovaSconto(1500,50))
console.log(trovaSconto(89,20))
console.log(trovaSconto(100,75))




//ES. Fare la somma di tutti gli elementi di un array
console.log(`ES. Fare la somma di tutti gli elementi di un array`)


function sommaElementiArray(Array){
    i=0;
    let sommaArray=0;
    while(i<Array.length){
        sommaArray=sommaArray+Array[i];
        i++
    }
    return sommaArray
}

console.log(sommaElementiArray([1,2,4]))
console.log(sommaElementiArray([4,2,10,2]))
console.log(sommaElementiArray([1]))

//ES. Quante volte è vero?
console.log(`ES. Quante volte è vero?`)

function quantiTrue(TFarray){
    i=0;
    let True=0;
    while(i<TFarray.length){
     if(TFarray[i]==true){
        True=True+TFarray[i];
     } 
     i++;
    }
    return True;
}
console.log(quantiTrue([true, false, false, true, false]))
console.log(quantiTrue([false, false, false, false]))
console.log(quantiTrue([]))

//ES. Calcolatrice di base
console.log("ES.calcolatrice di base")
function calcolatrice(primonumero,stringa,secondonumero){
    if(stringa="+"){
        return primonumero+secondonumero;
    } else if (stringa="-"){
        return primonumero-secondonumero;
    }else if(stringa="*"){
        return primonumero*secondonumero;
    } else if (stringa="/"){
        return b==0? "Impossibile dividere per 0!" : primonumero/secondonumero;
    }
}

console.log(calcolatrice(2,"+",2))
console.log(calcolatrice(2,"*",2))
console.log(calcolatrice(4,"/",3))


//ES. Validare un’e-mail

/*Crea una funzione che accetta una stringa, controlla se è un indirizzo email valido e restituisce true o false, 
a seconda della valutazione.
-La stringa deve contenere un carattere @.
-La stringa deve contenere un . carattere.
La @ deve avere almeno un carattere davanti. (ad esempio "d@ciao.com" è valido mentre "@ciao.com" non è valido.
Il . e la @ deve trovarsi nei posti appropriati. (ad esempio "hello.email@com" non è valido mentre 
"mario.rossi@email.com" è valido.
Se la stringa supera questi test, 
viene considerata un indirizzo email valido.*/

//ES. Sasso, carta, forbici

/*Crea una funzione che accetta due stringhe (p1 e p2 ⁠— che rappresentano i giocatori 1 e 2) 
come argomenti e restituisce una stringa che indica il vincitore in una partita a Sasso, Carta, Forbici.
Ogni argomento conterrà una singola stringa: "Sasso", "Carta" o "Forbici". 
Restituisci il vincitore secondo le seguenti regole:
Il sasso batte le forbici / Le forbici battono la carta / La carta batte il sasso
Se p1 vince, restituisci la stringa "Il vincitore è p1". Se p2 vince, restituisci la stringa "Il vincitore è p2" 
e se p1 e p2 sono gli stessi, restituisci "È un pareggio".*/

function rps(p1,p2){
    if(p1=="sasso" && p2=="forbici"){
        return "Il vincitore è p1"
    }
    if(p1=="forbici" && p2=="sasso"){
        return "Il vincitore è p2"
    }
    if(p1=="forbici" && p2=="carta"){
        return "Il vincitore è p1"
    }
    if(p1=="carta" && p2=="forbici"){
        return "Il vincitore è p2"
    }
    if(p1=="carta" && p2=="sasso"){
        return "Il vincitore è p1"
    }
    if(p1=="sasso" && p2=="carta"){
        return "Il vincitore è p2"
    }
    if(p1==p2){
        return "è un pareggio"
    }
}

console.log(rps("sasso","carta"))
console.log(rps("forbici","sasso"))
console.log(rps("carta","carta"))





