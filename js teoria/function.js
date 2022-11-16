
console.log("Moltiplicazione di due numeri");

function moltiplicazione(n1,n2){
    let molt = n1*n2;
    return molt;
}

console.log(moltiplicazione(3,2))
console.log(moltiplicazione(-3,-6))
console.log(moltiplicazione(7,3))

console.log("Convertire anni in giorni");

function convertianno(anno){
    let giorno_in_anni = anno*365;
    return giorno_in_anni;
}   

console.log(convertianno(65))
console.log(convertianno(0))
console.log(convertianno(20))



console.log("Minore o uguale a zero");

function minoreUgualeAZero(num){
    if(num>0){
        return false;
    }else{
        return true;
    }
}   

console.log(minoreUgualeAZero(5))
console.log(minoreUgualeAZero(0))
console.log(minoreUgualeAZero(-2))


console.log("Il problema della fattoria");

function numeroZampe(animali){
    let zampetotali=0;
    for(let i=0; i < animali.length; i++){
        let zampe=0;
        if(i==0){
            zampe= animali[i]*2;
        }else{
            zampe= animali[i]*4;
        }

        zampetotali = zampetotali + zampe;
    }
    return zampetotali;
}   

console.log(numeroZampe([2,3,5]))
console.log(numeroZampe([1,2,3]))
console.log(numeroZampe([5,2,8]))


console.log("Case di fiammiferi");

function numeroDiFiammiferi(step){
    let fiammiferi;
    if(step<0){
        return step + " non è un numero positivo";
    }
    if(step==0 || step==1){
        fiammiferi= step*6;
    }else{
        fiammiferi= step*6 - (step-1);
    }

    return fiammiferi;
}   

console.log(numeroDiFiammiferi(1))
console.log(numeroDiFiammiferi(4))
console.log(numeroDiFiammiferi(87))


console.log("Case di Somma i numeri da un unico numero");

function sommaDaUnUnicoNumero(numero){
    let result=0;
    for(let i=1; i<=numero; i++){
        result = result + i;
    }
    return result;
}

console.log(sommaDaUnUnicoNumero(4))
console.log(sommaDaUnUnicoNumero(13))
console.log(sommaDaUnUnicoNumero(600))

console.log("Trova lo sconto");

function trovaSconto(prezzo,sconto){
    let prezzo_finale;
    if(prezzo>0 && sconto>0 && (prezzo%1)==0 && (sconto%1)==0){
        prezzo_finale = prezzo*(100-sconto)/100;
    }else{  
        return "il prezzo e/o lo sconto non sono numeri interi";
    }
    return prezzo_finale
}

console.log(trovaSconto(1500,50))
console.log(trovaSconto(89,20))
console.log(trovaSconto(100,75))


console.log("Posizione nell’alfabeto");

function letteraInPosizione(numero){
    if(numero>=1 && numero<=26 && (numero%1) == 0){
        return String.fromCharCode(numero + 96)
    }else{
        return "invalid";
    }
}

console.log(letteraInPosizione(1))
console.log(letteraInPosizione(26.0))
console.log(letteraInPosizione(0))
console.log(letteraInPosizione(4.5))


console.log("Calcolatrice di base");

function calcolatrice(n1,operatore,n2){
    let result;
    if(operatore=="+"){
        return result= n1+n2;
    }
    if(operatore=="-"){
        return result= n1-n2;
    }
    if(operatore=="*"){
        return result= n1*n2;
    }
    if(operatore=="/"){
        if(n2==0){
            return "Impossibile dividere per 0!";
        }else{
            return result= n1/n2;
        }
    }
}

console.log(calcolatrice(2,"+",2))
console.log(calcolatrice(2,"*",2))
console.log(calcolatrice(4,"/",2))


console.log("Fare la somma di tutti gli elementi di un array");

function sommaElementiArray(array){
    let somma=0;
    for(let i=0;i<array.length;i++){
        somma += array[i];
    }
    return somma;
}

console.log(sommaElementiArray([1,2,4]))
console.log(sommaElementiArray([4,2,10,2]))
console.log(sommaElementiArray([1]))


console.log("Quante volte è vero?");

function quantiTrue(array){
    let result=0;
    for(let i=0;i<array.length;i++){
        if(array[i]==true){
            result++;
        }
    }
    return result;
}
console.log(quantiTrue([true,false,false,true,false]))
console.log(quantiTrue([false,false,false,false]))
console.log(quantiTrue([]))

console.log("Piegare un pezzo di carta");

function spessore(pieghe){
    let carta = 0.5;
    for(let i=0;i<pieghe;i++){
        carta=carta*2;
    }
    return carta/1000 +"m";
}
console.log(spessore(1))
console.log(spessore(4))
console.log(spessore(21))

console.log("Validare un’e-mail");

function validateEmail(email){
    if(email.includes("@") && email.includes(".")){
        if(email.indexOf("@")>0){
            if(email.indexOf("@") < email.indexOf(".",email.indexOf("@"))){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else {
        return false;
    }
}
console.log(validateEmail("@gmail.com"))
console.log(validateEmail("hello.gmail@com"))
console.log(validateEmail("gmail"))
console.log(validateEmail("hello@gmail"))
console.log(validateEmail("hello@edabit.com"))


console.log("Sasso, carta, forbici");

function rps(p1,p2){
    if((p1=="Sasso" && p2=="Forbici")|| (p1=="Forbici" && p2=="Carta") || (p1=="Carta" && p2=="Sasso")){
        return "Il vincitore è p1";
    }else if((p2=="Sasso" && p1=="Forbici")|| (p2=="Forbici" && p1=="Carta") || (p2=="Carta" && p1=="Sasso")){
        return "Il vincitore è p2";
    }else{
        return "È un pareggio";
    }
}
console.log(rps("Sasso", "Carta"))
console.log(rps("Forbici", "Carta"))
console.log(rps("Carta", "Carta"))


console.log("Quanti giorni tra due date");

function getDays(date1,date2){
    let days;
    days = (date2 - date1)/(1000*60*60*24);
    return Math.abs(days);

}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")))
console.log(getDays(new Date("December 29, 2018"), new Date("January 1, 2019")))
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")))


console.log("Rimuovere i duplicati da un array");

function removeDups(array){
    let arrayNuovo=[];
    for(let i=0; i<array.length; i++){

        if(arrayNuovo.includes(array[i])){

        }else{
            arrayNuovo.push(array[i]);
        }
    }
    return arrayNuovo;  
}
console.log(removeDups([1, 0, 1, 0]))
console.log(removeDups(["The", "big", "cat"]))
console.log(removeDups(["John", "Taylor", "John"]))


console.log("Ottieni la somma del budget delle persone");

function budgetTotale(persona){
    let totale=0;
    for(let i=0; i<persona.length; i++){
        totale += persona[i].budget;
    }
    return totale;
}

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 23000 },
        { name: "Steve", age: 32, budget: 40000 },
        { name: "Martin", age: 16, budget: 2700 },
    ])
);

console.log(
    budgetTotale([
        { name: "John", age: 21, budget: 29000 },
        { name: "Steve", age: 32, budget: 32000 },
        { name: "Martin", age: 16, budget: 1600 },
    ])
);


console.log("Calcola il prezzo totale dei generi alimentari");

function prezzoTotaleAlimenti(alimenti){
    let prezzoTotale = 0;
    for(let i=0; i<alimenti.length; i++){
        prezzoTotale += (alimenti[i].quantity*alimenti[i].price);
    }
    return prezzoTotale.toFixed(1);
}

console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 1, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "cereals", quantity: 1, price: 2.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([{ product: "milk", quantity: 3, price: 1.5 }])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "milk", quantity: 1, price: 1.5 },
        { product: "eggs", quantity: 12, price: 0.10 },
        { product: "bread", quantity: 2, price: 1.6 },
        { product: "cheese", quantity: 1, price: 4.5 },
    ])
);
console.log(
    prezzoTotaleAlimenti([
        { product: "chocolate", quantity: 1, price: 0.10 },
        { product: "lollipop", quantity: 1, price: 0.20 },
    ])
);
