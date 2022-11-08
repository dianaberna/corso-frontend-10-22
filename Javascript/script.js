
console.log("--- 1) Stampare tutti gli elementi dell’array");

let array =[2,6,9,10,-2,-3,0,2,5,1];


for(let i=0;i<array.length;i++){

    console.log(array[i]);

}

console.log("--- 2) Stampare la somma di tutti gli elementi dell’ array");

let sum=0;
for(let i=0;i<array.length;i++){
    sum += array[i];
}
console.log(sum);

console.log("--- 3) Stampare la somma dei soli elementi dispari");
sum=0
for(let i=0;i<array.length;i++){
    if((array[i]%2)!=0){
        sum += array[i];
    }
}
console.log(sum);


console.log("--- 4) Stampare la somma dei soli elementi in posizione pari");
sum=0
for(let i=0;i<array.length;i++){
    if((i%2)==0){
        sum += array[i];
    }
}
console.log(sum);

console.log("--- 5) Stampare quante volte compare l’elemento 2");
let numero2=0;
for(let i=0;i<array.length;i++){
    if(array[i]==2){
        numero2++
    }
}
console.log(numero2);

console.log("--- 6) Stampare quanti numeri positivi (compreso lo zero) ci sono nell’array");
let positivi=0;
for(let i=0;i<array.length;i++){
    if(array[i]>=0){
        positivi++
    }
}
console.log(positivi);

console.log("--- 7) Stampare il numero massimo ");
let max=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max);

console.log("--- 8) Stampare il numero minimo");
let min=array[0];
for(let i=0;i<array.length;i++){
    if(array[i]<min){
        min=array[i];
    }
}
console.log(min);

console.log("--- 9) Inserire in un nuovo array solo gli elementi negativi");
let arraynegativo=[];
let cont=0;
for(let i=0;i<array.length;i++){
    if(array[i]<0){
        arraynegativo[cont]=array[i];
        cont++
    }
}
console.log(arraynegativo);

console.log("--- 10) Creare un nuovo array dove ogni elemento del nuovo è uguale al doppio di quello dato");
let arraydoppio=[];
cont=0;
for(let i=0;i<array.length;i++){
        arraydoppio[cont]=array[i]*2;
        cont++
}
console.log(arraydoppio);
console.log("--- 11) Creare un nuovo array in cui inserisco due volte (una di seguito l’altra) l’array dato");
let arrayduevolte=[];
cont=0;
let r=0
for(let i=0;i<array.length*2;i++){
    if(cont>9){
        arrayduevolte[cont]=array[r];
        r++;
    }else{
        arrayduevolte[cont]=array[i]; 
    }
    cont++
}
console.log(arrayduevolte);

console.log("--- 12) Stampare al contrario gli elementi dell’array");
let arraycontrario=[];
let n=array.length-1;
for(let i=0;i<array.length;i++){
    arraycontrario[n]=array[i];
    n=n-1
}
console.log(arraycontrario);