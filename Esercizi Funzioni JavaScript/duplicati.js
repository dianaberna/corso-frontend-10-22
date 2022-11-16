


let chars = ['A', 'B', 'A', 'C', 'B'];

// Come rimuovere i duplicati da un array 

// 0 -> 2 for e splice 
for(let i = 0; i < chars.length; i++){
    for(let j = 0; j < chars.length; j++){
        if(i != j){
            if(chars[i] === chars[j]){
                chars.splice(j, 1)
            }
        }
        
    }
}

console.log(chars)

chars = ['A', 'B', 'A', 'C', 'B'];

// 1 -> con il for
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
let uniqueChars3 = [];
for (let index = 0; index < chars.length; index++) {
    if (!uniqueChars3.includes(chars[index])) {
        uniqueChars3.push(chars[index]);
    }
}
console.log(uniqueChars3);


// 2 -> con filter e funzione normale
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let uniqueChars2 = chars.filter(function (elemento, indice) {
    return chars.indexOf(elemento) === indice;
})

console.log(uniqueChars2);
console.log("qui")
// 3 -> con l'utilizzo di Set
// Set -> L'oggetto Set consente di memorizzare valori univoci di 
// qualsiasi tipo, siano essi valori primitivi o riferimenti a oggetti
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);


// ---------------------------------------------------------------------------------------------
// Altri modi di scrivere un loop

// for...of 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// for...in 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// 3 -> con il forEach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
uniqueChars3 = []
chars.forEach((element) => {
    if (!uniqueChars3.includes(element)) {
        uniqueChars3.push(element);
    }
});

console.log(uniqueChars3);

// ---------------------------------------------------------------------------------------------
// Un altro modo di scrivere una funzione 
// 2 -> filter e arrow function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
uniqueChars2 = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});

console.log(uniqueChars2);