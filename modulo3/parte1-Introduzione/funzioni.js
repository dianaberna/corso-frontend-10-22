console.log("--- Funzioni ---")
let i=0
let a=5
let b=3
let somma = a+b
console.log(somma)

// funzione somma 2 valori
function sommafunzione(primonumero, secondonumero){
  return primonumero+secondonumero
}

let risultato=sommafunzione(5,3)
console.log(risultato)
risultato=sommafunzione(3,20)
console.log(risultato)
risultato=sommafunzione(-4,200)
console.log(risultato)

// se pari = true, altrimetni false
function controlloPari(numero){
  if(numero%2 == 0){
  return "Il numero "+numero+" è pari"
  }else{
  return "Il numero "+numero+" è dispari"
  }
}

console.log(controlloPari(14))
console.log(controlloPari(145))

function sommaArray(array){
  let somma=0;
  for (let i = 0; i < array.length; i++) {
    somma=somma+array[i]    
  }
  return somma;
}
let array1=[1,5,1,3]
console.log("la somma delgli elementi dell'array è "+(sommaArray(array1)))
console.log(`la somma delgli elementi dell'array è ${sommaArray(array1)}`)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esercizi`)
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 1 - Moltiplicazione di 2 numeri`)
{ //parentesi messe solo per chiudere
  function multiplication(n1,n2) {
    return n1*n2
  }
  console.log(multiplication(3,2))
  console.log(multiplication(-3,-6))
  console.log(multiplication(7,3))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 2 - Conversione di anni in giorni`)
{ //parentesi messe solo per chiudere
  function ageConversion(n1) {
    return n1*365
  }
  console.log(ageConversion(65))
  console.log(ageConversion(0))
  console.log(ageConversion(20))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 3 - Verifica numero minore o uguale a 0`)
{ //parentesi messe solo per chiudere
  function minEqualZero(n1) {
/*     if (n1<=0) {
      return true   
    }
    else{
      return false
    } */
    return n1 <=0? true : false
  }
  console.log(minEqualZero(5))
  console.log(minEqualZero(0))
  console.log(minEqualZero(-2))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 4 - Problema fattoria`)
{ //parentesi messe solo per chiudere
  function totLegs(array1){
    return (array1[0]*2+((array1[1]+array1[2])*4))
  }
  console.log(totLegs([2,3,5]))
  console.log(totLegs([1,2,3]))
  console.log(totLegs([5,2,8]))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 5 - Case di fiammiferi`)
{ //parentesi messe solo per chiudere
  function matches(n1) {
    if ((n1>0)&&(n1%1==0)) {
      return (6*n1-(n1-1))
    } else 
    if (n1==0){
      return (0)
    }
    else{
      return ("Hai inserito dei dati sbagliati!!!")
    }
  }
  console.log(matches(1))
  console.log(matches(4))
  console.log(matches(87))
  console.log(matches(-10))
  console.log(matches(0))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 6 - Funzione sommatoria`)
{ //parentesi messe solo per chiudere
  function sumNNumbers(n1) {
    let n2=0
    for (let i = 0; i < n1; i++) {
      n2 = n2+i+1
    }
    return n2
  }
  console.log(sumNNumbers(4))
  console.log(sumNNumbers(13))
  console.log(sumNNumbers(600))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 7 - Trova lo sconto`)
{ //parentesi messe solo per chiudere
  function discount(n1,n2) {
    return ((n1-(n1*n2/100)).toFixed(2))
  }
  console.log(discount(1500,50))
  console.log(discount(89,20))
  console.log(discount(100,75))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 8 - Posizione nell'alfabeto`)
{ //parentesi messe solo per chiudere
  function alphPositiion(n1) {
    if ((n1%1==0) && (n1>0) && (n1<=26)){
      return (String.fromCharCode(n1+96))
    }
    else{
      return ("Invalid")
    }
  }
  console.log(alphPositiion(1))
  console.log(alphPositiion(26.0))
  console.log(alphPositiion(0))
  console.log(alphPositiion(4.5))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 9 - Calcolatrice di base`)
{ //parentesi messe solo per chiudere
  function sum2Numbers(n1,n2){
    return n1+n2
  }
  function mult2Numbers(n1,n2){
    return n1*n2
  }
  function sub2Numbers(n1,n2){
    return n1-n2
  }
  function div2Numbers(n1,n2){
    if (n2==0) {
      return ("Impossibile dividere per 0")
    }
    else{
      return n1/n2
    }
  }
  function baseCalc(n1,o1,n2) {
    switch (o1) {
      case "+":
        return (sum2Numbers(n1,n2))
      case "-":
        return (sub2Numbers(n1,n2))
      case "*":
        return (mult2Numbers(n1,n2))
      case "/":
        return (div2Numbers(n1,n2))        
      default:
        console.log("Hai inserito dei dati sbagliati")
        break;
    }
  }
  console.log(baseCalc(2,"+",2))
  console.log(baseCalc(2,"*",2))
  console.log(baseCalc(4,"/",2))
  console.log(baseCalc(4,"/",0))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 10 - Somma elementi di un array`)
{ //parentesi messe solo per chiudere
  function sumElemArray(array) {
    n1=0
    for (let i = 0; i < array.length; i++) {
      n1=n1+array[i]
    }
    return (n1)
  }
  array1 = [1,2,4]
  array2 = [4,2,10,2]
  array3 = [1]
  console.log(sumElemArray(array1))
  console.log(sumElemArray(array2))
  console.log(sumElemArray(array3))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 11 - Trovare quante volte vero`)
{ //parentesi messe solo per chiudere
  function nTrue(array) {
    n1=0
    if (array.length==0) {
      n1=0
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == true) {
          n1++
        }
      }
    }
    return (n1)
  }
  function nTrue2(array) {
    n1=0
    for (let i = 0; i < array.length; i++) {
      array[i] === true? n1++ : null
    }
    return (n1)
  }
  array4=[true,false,false,true,false]
  array5=[false,false,false,false]
  array6=[]
  console.log(nTrue(array4))
  console.log(nTrue(array5))
  console.log(nTrue(array6))
  /******/
  console.log(nTrue2(array4))
  console.log(nTrue2(array5))
  console.log(nTrue2(array6))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 12 - Piegare un pezzo di carta`)
{ //parentesi messe solo per chiudere
  function paperFold(n1) {
    return (0.5*(2**n1)/1000)
  }
  console.log(paperFold(1)+"m")
  console.log(paperFold(4)+"m")
  console.log(paperFold(21)+"m")
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 13 - Validare una email`)
{ //parentesi messe solo per chiudere
  function mailValid(s1) {
    let arrayDomains=['it','com','net','org']
    let strSplit = s1.split('.')
    console.log(strSplit)
    if ((s1.includes("@")==true)&&
    (s1.includes(".")==true)) {
      if ((s1.indexOf("@")>0)&&
      (s1.lastIndexOf(".")>(s1.indexOf("@")+1))&&
      (s1.lastIndexOf(".")<(s1.length-1)) &&
      (arrayDomains.includes(strSplit[strSplit.length-1]))) {
        return ("L'indirizzo email è valido")
      }
    }
    return ("L'indirizzo email non è valido")
  }
  console.log(mailValid("@gmail.com"))
  console.log(mailValid("hello.gmail@com"))
  console.log(mailValid("gmail"))
  console.log(mailValid("hello@gmail"))
  console.log(mailValid("hello@gmail."))
  console.log(mailValid("hello@edabit.com"))
  console.log(mailValid("hello.prova@edabit.com"))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 14 - Sasso, carta, forbici`)
{ //parentesi messe solo per chiudere
  function rPS(s1,s2) {
    if (((s1=="Sasso")||(s1=="Carta")||(s1=="Forbici"))&&((s2=="Sasso")||(s2=="Carta")||(s2=="Forbici"))) {
      if (s1==s2) {
        return ("É un pareggio")
      } else {
        switch (s1) {
          case "Sasso":
            if (s2=="Carta") {
              return (`Il vincitore è il giocatore 2 perché ${s2} batte ${s1}`)
            } else {
              return ((`Il vincitore è il giocatore 1 perché ${s1} batte ${s2}`))
            }
          case "Carta":
            if (s2=="Forbici") {
              return (`Il vincitore è il giocatore 2 perché ${s2} batte ${s1}`)
            } else {
              return ((`Il vincitore è il giocatore 1 perché ${s1} batte ${s2}`))
            }
          case "Forbici":
            if (s2=="Sasso") {
              return (`Il vincitore è il giocatore 2 perché ${s2} batte ${s1}`)
            } else {
              return ((`Il vincitore è il giocatore 1 perché ${s1} batte ${s2}`))
            }
        }
      }
    } else {
      return ("Inserisci i dati corretti!")
    }
  }
  /*-- soluzione alternativa --*/
  function rPS2(s1,s2) {
    if (((s1=="Sasso")||(s1=="Carta")||(s1=="Forbici"))&&((s2=="Sasso")||(s2=="Carta")||(s2=="Forbici"))) {
      if (s1==s2) {
        return ("É un pareggio")
      } else {
        if (((s1+s2)=="SassoCarta")||((s1+s2)=="CartaForbici")||((s1+s2)=="ForbiciSasso")) {
          return (`Il vincitore è il giocatore 2 perché ${s2} batte ${s1}`)
        }else{
            return (`Il vincitore è il giocatore 1 perché ${s1} batte ${s2}`)
        }
      }
    } else {
      return ("Inserisci i dati corretti!")
    }
  }
  console.log(rPS("Sasso","Carta"))
  console.log(rPS("Forbici","Carta"))
  console.log(rPS("Forbici","Sasso"))
  console.log(rPS("Carta","Carta"))
  console.log(rPS("Carte","Carta"))
  console.log(`-- soluzione senza utilizzo switch --`)
  console.log(rPS2("Sasso","Carta"))
  console.log(rPS2("Forbici","Carta"))
  console.log(rPS2("Forbici","Sasso"))
  console.log(rPS2("Carta","Carta"))
  console.log(rPS2("Carte","Carta"))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 15 - Conteggio giorni tra 2 date`)
{ //parentesi messe solo per chiudere
  function dayDiff(d1,d2) {
    let date1 = new Date(d1)
    let date2 = new Date(d2)
    return Math.abs((date2-date1)/1000/60/60/24)
  }
  console.log(dayDiff("June 14, 2019","June 20, 2019"))
  console.log(dayDiff("December 29, 2018","January 1, 2019"))
  console.log(dayDiff("July 20, 2019","July 30, 2019"))
  console.log(dayDiff("July 30, 2019","July 20, 2019"))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 16 - Rimuovere i duplicati di un array`)
{ //parentesi messe solo per chiudere
  function dupsRemove1(array) { // questa funazione richiede l'ordinamento preventvo dell'array
    array.sort()
    for (let i = 0; i < array.length; i++) {
      let last=array.lastIndexOf(array[i])
      if ((i!=last)&&(array[i]==array[last])) {
        array.splice((i),(last-i))
      }
      if(array[i]==null){
        array.splice(i,(array.length))
      }
    }  
    return array
  }
  /******/
  function dupsRemove2(array) {
    for (i = 0; i < array.length; i++) {
      let last=array.lastIndexOf(array[i]) //qui inizializzo la variabile last che mi va ad indicare l'ultima posizione all'interno dell'array del valore che devo andare a confrontare
      if (array[i]==null) {                // eliminazione valori nulli
        array.splice(i,1)
        i--                                   // mi serve per non skippare il prossimo campo vuoto se sono contigui
      }else{   
        while ((i!=last)&&(array[i]==array[last])) {       // per non fare cancellare un dato che compare solo una volta, qui verifico 2 cose: che l'indice nel quale mi trovo sia diverso dall'ultimo (quindi che stiamo confrontando 2 valori che si trovano indici diversi) e che i valori siano duplicati (così da andare successivamente a cancellare l'ultimo valore) 
          array.splice((last),(1))
          last=array.lastIndexOf(array[i])  //qui reinizializzo la variabile last, così da verificase se, una volta cancellato l'ultimo valore duplicato dell'array, ce ne siano altri precedenti
        }
      }
    } 
    return(array)
  }
  /******/
  function dupsRemove3(array) {               //funzione fatta con includes
    let newArray =[]
    for (let i = 0; i < array.length; i++) {
      if (array[i]!=null){                    //eliminazione valori nulli
        (newArray.includes(array[i]) == false) ? newArray.push(array[i]) : null
      }
    }
    return array=newArray
  }
  /******/
  //let uniqueChars = [...new Set(chars)]
  
  console.log(`-- soluzione con funzione sort e splice --`)
  console.log(dupsRemove1([,,,,,,1,0,1,0,1,,,,,1,1,1,1,1,0,0,0,0,0,2,3,1,2,0,0,0,0,true]))
  console.log(dupsRemove1(["The","big","big","cat",,,,,,,,]))
  console.log(dupsRemove1(["John","John","Taylor"]))
  console.log(`-- soluzione solo con funzione splice --`)
  console.log(dupsRemove2([,,,,,,1,0,1,0,1,,,,,1,1,1,1,1,0,0,0,0,0,2,3,1,2,0,0,0,0,true]))
  console.log(dupsRemove2(["The",,,"big","big",,,"cat",,]))
  console.log(dupsRemove2(["Taylor","John","John","Taylor"]))
  console.log(`-- soluzione con include e push --`)
  console.log(dupsRemove3([,,,,,,1,0,1,0,1,,,,,1,1,1,1,1,0,0,0,0,0,2,3,1,2,0,0,0,0,true]))
  console.log(dupsRemove3(["The",,,"big","big",,,"cat",,]))
  console.log(dupsRemove3(["Taylor","John","John","Taylor"]))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 17 - Somma budget`)
{ //parentesi messe solo per chiudere
  function getTotBudget(object){
    let tot=0
    for (let i = 0; i < object.length; i++) {
      tot=tot+object[i].budget
    }
    return tot
  }
  console.log(getTotBudget([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
  );
  console.log(
    getTotBudget([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
  );
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 18 - Prezzo totale generi alimentari`)
{ //parentesi messe solo per chiudere
  function getTotalPrice(object){
    let tot=0
    for (let i = 0; i < object.length; i++) {
      tot=tot+(object[i].price*object[i].quantity)
    }
    return tot.toFixed(2)
  }
  console.log(
    getTotalPrice([
      { product: "milk", quantity: 1, price: 1.5 }
    ])
  );
  console.log(
    getTotalPrice([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
  );
  console.log(
    getTotalPrice([{ product: "milk", quantity: 3, price: 1.5 }])
  );
  console.log(
    getTotalPrice([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
  );
  console.log(
    getTotalPrice([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
  );
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 19 - Conversione in binario di un numero decimale`)
{
  function decConv(n1) {
    let tot=0
    n1=n1.toString()
    for (let i = 0; i < n1.length; i++) {
      tot= tot+ (n1[i]*(2**(n1.length-i-1)))
    }
    return tot
  }
  console.log(decConv(1111101000))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 20 - Conversione in decimale di un numero binario`)
{
  function binConv(n1) {
    let tot=0
    for (let i = 10; i >= 0; i--) {
      if (n1/(2**i)>=1) {
        tot=tot+10**i
        n1=n1-(2**i)
      } else {
        tot=tot+0
      }      
    }
    return tot.toString()
  }
  /******/
  function binConv2(n1) {   //soluzione semplice
    return n1.toString(2);
  }
  console.log(binConv(10))
  console.log(binConv(0))
  console.log(binConv(1023))
  console.log(binConv(1000))
  console.log(binConv2(10))
  console.log(binConv2(0))
  console.log(binConv2(1023))
  console.log(binConv2(1000))
}
console.log(``)
console.log(`-------------------------------------------------------`)
console.log(``)
console.log(`Esrcizio 21 - `)