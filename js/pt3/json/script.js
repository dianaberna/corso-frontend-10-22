import miaVariabile from './dati.json' assert { type: 'json' };

/* 
 * JSON.parse(root); -> data una stringa lo trasforma in oggetto json
 * JSON.stringify(root); -> dato un oggetto json si trasforma in stringa
*/

let convertoMiaVariabile = JSON.stringify(miaVariabile)
console.log(miaVariabile)
console.log(convertoMiaVariabile)
console.log(JSON.parse(convertoMiaVariabile))

/* for (var i = 0; i < miaVariabile.data.reviewer.length; i++) {
    console.log(miaVariabile.data.reviewer[i].name)    
} */