// loop
/*  WHILE
while (condition) {
    
}
*/
console.log("while")
i = 0;
let array = [2, 5, 7, 3];
while (i < array.length) {
    console.log(array[i]);
    i++;
}

/*  FOR
for (let index = 0; index < array.length; index++) {
    const element = array[index];  
} */
console.log("for")
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

/*  DO WHILE
do {
    
} while (condition); */
console.log("do while")
i = 0;
do {
    console.log(array[i]);
    i++;
} while (i < array.length);

/* FOREACH
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

array.forEach(element => {
    
}); */
console.log("foreach")
array.forEach(pippo => {
    console.log(pippo)
})

array.forEach((pippo, indice)=> {
    console.log(`${indice} -> ${pippo}`)
})

console.log("for in")
/* FOR IN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
} 
*/
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

/* FOR OF
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const iterator of object) {
    
} */
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}
