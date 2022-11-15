const str = "Hello World ciao";
str.replace("l", "?"); // "He*lo World"

console.log(str)
console.log(str.replace("l", "*"))
console.log(str.replaceAll("l", "*"))
console.log(str.repeat(3))
console.log(str.slice(6))
console.log(str.split(" "))

let stringaprova = "hello.world.ciao.ciao"
console.log(stringaprova.split("."))

console.log(str.substring(1,5))
console.log(str.indexOf("World"))

console.log(str.includes("ciao"))
console.log(str.includes("prova"))

let stringa1 = "ciao"
let stringa2 = "mondo"
console.log(stringa1+stringa2)
console.log(stringa1.concat(stringa2))
let indice = 0;
console.log("i= "+i)
console.log(`ciao ciao ciao ${indice} `);
console.log("ciao ciao ciao "+indice+" ");