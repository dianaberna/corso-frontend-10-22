const str = "Hello World ciao";
str.replace("l", "?"); // "He*lo World"

console.log(str)
console.log(str.replace("l", "*"))
console.log(str.replaceAll("l", "*"))
console.log(str.repeat(3))
console.log(str.slice(6))
console.log(str.split(" "))

let nuovastringa = "hello.world.ciao.ciao"
console.log(nuovastringa.split("."))

console.log(str.substring(1,5))
console.log(str.indexOf("World"))

console.log(str.includes("ciao"))
console.log(str.includes("prova"))

let primastringa = "ciao"
let secondastringa = "mondo"
console.log(primastringa+secondastringa)
console.log(primastringa.concat(secondastringa))
let i = 0;
console.log("i= "+i)
console.log(`ciao ciao ciao ${i} `);
console.log("ciao ciao ciao "+i+" ");