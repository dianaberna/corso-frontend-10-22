
let array = [2,6,9,10,-2,-3,0,2,5,1]
let somma1 = 0
let somma2 = 0
let somma3 = 0
let j=0
let k=0
let x=0
let max=array[0]
let min=array[0]
let array2 = []
let array3 = []
let array4 = []
let array5 = []
console.log("---STAMPA VALORI ARRAY---")

for (let i = 0; i < array.length; i++) {
  console.log(" - Il "+(i+1)+"° elemento dell'array è "+array[i])   // stampa tutti gli elementi dell'array in ordine
  somma1=somma1+array[i]                                            //somma di tutti gli elementi
  if (i%2==0) {
    somma2=somma2+array[i]                                          //somma tutti gli elementi in posizione pari
  }
  if (array[i]==2) {                                                //somma quante volte il valore 2 si trova all'interno dell'array
    j++
  }
  if (array[i]%2!=0) {                                              //somma tutti gli elementi dispari
    somma3=somma3+array[i]
  }
  if (array[i]>=0) {                                                //verificaquanti numeri positivi ci sono nell'array
    k++
  }
  if (max<array[i]) {                                               //verifica il valore massimo nell'array
    max=array[i]
  }
  if (min>array[i]) {                                               //verifica il valore minimo nell'array
    min=array[i]
  }
  if (array[i]<0) {                                                 //crea un nuovo array con i soli elementi dispari
    array2.push(array[i])
    //array2[x]=array[i]
    //x++
  }
  array3.push(array[i]*2)
  //array3[i]=array[i]*2                                            //crea un nuovo array con i valori raddoppiati
  //array4[i]=array4[i+array.length]=array[i]                       //crea un nuovo array con i dati duplicati
  //array5[array.length-i-1]=array[i]                               //crea un nuovo array ordinato al contrario
}
array4=array.concat(array)
array.reverse()
array5=array
//---//
console.log("")
console.log("---ESERCIZI BASE---")
console.log("")
console.log(" - La somma di tutti gli elementi è "+somma1)
console.log(" - La somma di tutti gli elementi dispari è "+somma3)
console.log(" - La somma di tutti gli elementi in posizione pari è "+somma2)
console.log(" - Il numero 2 compare "+j+" volte")
console.log(" - I numeri positivi incluso lo zero sono in totale "+k)
console.log(" - Il numero massimmo è "+max)
console.log(" - Il numero minimo è "+min)
console.log("")
console.log("---ESERCIZI CREAZIONE NUOVI ARRAY---")
console.log("")
console.log(" - Il secondo array è composto dai valori "+array2)
console.log(" - Il terzo array è composto dai valori "+array3)
console.log(" - Il quarto array è composto dai valori "+array4)
console.log(" - L'array iniziale scritto al contrario è composto dai valori "+array5)
array.reverse()

// -------------------------- //
console.log("")
console.log("---ESERCIZI ARRAY INTERMEDI---")
console.log("")
let array6=[1,2,2,3,4]
let array6bis=["a","n","n","a"]
let str6ter='Anina'
let array7=[4,2,2,4]
let array7bis=["L","u","c","a"]
let str7ter='luca'
let array8=[]
let array9=[]
let array10=[]
let m=0
let n=0

for (n = 0; n < array6.length; n++) {
  if (array6[n]%2!=0) {
    array10[m]=array6[n]
    m++
  }
}
for (n = 0; n < array7.length; n++) {
  if (array7[n]%2==0) {
    array10[m]=array7[n]
    m++
  }  
}
//---- ES 13 e 14 -----------------
m=0
let max_length=array7.length
if (array7.length < array6.length) {
  max_length=array6.length
} 
for (i = 0; i < max_length; i++) {
  if (typeof (array6[i]) != 'number') {
  // if (typeof (array6[i]) === false) {
    array8[i]=0+array7[i];
  }
  else{
    if (typeof (array7[i]) != 'number') {
    //if (typeof (array7[i]) === false) {
      array8[i]=array6[i]+0;
    } else {
      array8[i]=array6[i]+array7[i];
    }
  }
  if (array6[i]%2!=0) {
    array9[m]=array6[i]
    m++
  }
  if (array7[i]%2==0) {
    array9[m]=array7[i]
    m++
  }  
}


console.log("L'array risultante dalla somma degli array 6 e 7 è composto dai numeri: "+array8)
console.log("L'array composto dai numeri dispari del 6 e pari del 7 è composto dai numeri: "+array9)
console.log("L'array composto dai numeri dispari del 6 e pari del 7 è composto dai numeri: "+array10)

//---- ES 16 ---------------------------------------

let palindromo
for (i = 0; i < (array7.length/2); i++) {
  if ((array6[i])!=(array6[array6.length-i-1])) {
    console.log("L'array 6 non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("L'array 6 è palindromo")
}

palindromo = null
for (i = 0; i < (array7.length/2); i++) {
  if ((array7[i])!=(array7[array7.length-i-1])) {
    console.log("L'array 7 non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("L'array 7 è palindromo")
}

palindromo = null
for (i = 0; i < (array6bis.length/2); i++) {
  if ((array6bis[i])!=(array6bis[array6bis.length-i-1])) {
    console.log("L'array 6 bis non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("L'array 6bis è palindromo")
}
palindromo = null
for (i = 0; i < (array7bis.length/2); i++) {
  if ((array7bis[i])!=(array7bis[array7bis.length-i-1])) {
    console.log("L'array 7 bis non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("L'array 7bis è palindromo")
}
palindromo = null
for (i = 0; i < (str6ter.length/2); i++) {
  if ((str6ter[i].toLowerCase())!=(str6ter[str6ter.length-i-1].toLowerCase())) {
    console.log("Il nome "+str6ter+" non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("Il nome "+str6ter+" è palindromo")
}
palindromo = null
for (i = 0; i < (str7ter.length/2); i++) {
  if ((str7ter[i].toLowerCase())!=(str7ter[str7ter.length-i-1].toLowerCase())) {
    console.log("Il nome "+str7ter+" non è palindromo")
    palindromo = false
    break;
  }
}
if (palindromo!=false) {
  console.log("Il nome "+str6ter+" è palindromo")
}

// stesso esercizio con funzione reverse //
const array11=[...array7]
console.log(array7)
console.log(array11)
console.log(array7.reverse())
console.log(array11)
if (array11 == array7) {
  console.log("reverse - L'array 7 è palindromo")
}
else{
  console.log("reverse - L'array 7 non è palindromo")
}
/*array11=array7
if (array11 == array7.reverse()) {
  console.log("reverse - L'array 7 è palindromo")
}
else{
  console.log("reverse - L'array 7 non è palindromo")
} */

//---- ES 15 ----------------------

for (i = 0; i < max_length; i++) {
  if ((typeof (array6[max_length-i-1]) != 'number') || ((array6[max_length-i-1]) == 0)){ // denominatore = 0
    if ((typeof (array7[i]) != 'number') || ((array7[i]) == 0)) {
      array7[i]="Indefinito"
    } 
    else {
      array7[i]="Infinito"
    }
  }
  else{
    if ((typeof (array7[i]) != 'number') || ((array7[i]) == 0)) {
      array7[i]=0
      }
      else{
        array7[i]=array7[i]/(array6[max_length-i-1])
      }
  }
}
console.log("I valori aggiornati dell'array 7 sono: "+array7)
