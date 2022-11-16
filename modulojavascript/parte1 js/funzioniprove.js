function sommaArray(array){
    let somma=0;
    for(let i=0; i<array.length; i++){
        somma=somma+array[i]
        console.log("somma="+somma)
    }
    console.log("sommafinale="+somma)
    return somma;
}

console.log(sommaArray([1,5,3]))
console.log(sommaArray([6,2,5]))

function modificaArray(array,moltiplicatore){
   /* console.log(array);
    console,log(moltiplicatore);*/
    let i=0;
    while(i<array.length){
        array[i]=array[i]*moltiplicatore;
        i++;
    }
return array;
}

console.log(modificaArray([1,5,3],3))

