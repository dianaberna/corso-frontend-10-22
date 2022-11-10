console.log ("Moltiplicazione di due numeri")

function moltiplicazione(n1,n2){

    return n1*n2; }

console.log (moltiplicazione(3,2))

console.log ("Convertire anni in giorni")

function anni_in_giorni(giorni, anni) {
      
    return giorni*anni
}

console.log (anni_in_giorni(365,65))


console.log ("Crea una funzione che accetta un numero come unico argomento e restituisce true se è minore o uguale a zero, altrimenti restituisce false.")

function minoreUgualeAZero (n1)

     {if (n1<=0) 
        return true;
    }

console.log (minoreUgualeAZero(5))

console.log ("problema zampe") 

// 2 polli 
// 3 mucche 
// 5 maiali

function totale_zampe(pollo,mucca,maiale)

{     
      return (pollo*2)+(mucca*3)+(maiale*5)
}

console.log(totale_zampe(2,4,4))