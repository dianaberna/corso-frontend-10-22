
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
    if(prezzo>0 && sconto>0){
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
    
}

console.log(letteraInPosizione(1))
console.log(letteraInPosizione(26))
console.log(letteraInPosizione(0))
console.log(letteraInPosizione(4,5))