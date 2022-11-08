
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
    array2[x]=array[i]
    x++
  }
  array3[i]=array[i]*2                                              //crea un nuovo array con i valori raddoppiati
  array4[i]=array4[i+array.length]=array[i]                         //crea un nuovo array con i dati duplicati
  array5[array.length-i-1]=array[i]                                 //crea un nuovo array ordinato al contrario
}
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
