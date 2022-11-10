
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

let array1=[1,2,2,3,4];
let array2=[4,2,2,4];
let lunghezza;
let lungo;
console.log("--- 13) Creare un array3 con la somma degli elementi dell’array1 e dell’array2");
if(array1.length >= array2.length){
    lunghezza= array1.length;
    lungo=true;
}else{
    lunghezza= array2.length;
    lungo=false;
}
let array3=[];
for(let i=0;i < lunghezza;i++){
    if(i < array2.length && lungo === true){
        array3.push(array1[i]+array2[i]);
    }else if(lungo === true){
        array3.push(array1[i]);
    }
    if(i < array1.length && lungo === false){
        array3.push(array1[i]+array2[i]);
    }else if(lungo === false){
        array3.push(array2[i]);
    }
}
console.log(array3);

console.log("--- 14) Creare un array3 con la somma degli elementi (non la posizione) dispari di array1 e pari di array2");

console.log("--- 15) Aggiornare l’array2 con elemento = il suo valore diviso il valore nella posizione lunghezza-posizione dell’array1");
let arraydiv=[];
for(let i=0;i<array1.length;i++){
    array2[i]=array2[i]/(array2[(array1.length-i)]);
}
console.log(arraydiv);
console.log("--- 16) Verificare se gli array sono palindromi come ad esempio “anna”, “radar”, “emme”");
for(let i=0;i<array1.length;i++){


}