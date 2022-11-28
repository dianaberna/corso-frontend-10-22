// primo modo di definire una classe e creare un oggetto sulla sua base
// const demo = document.getElementById('demo');

// class Car {

//     name = ''
//     year = 'year'

//     constructor({name, year}) {
//       this.name = name;
//       this.year = year;
//     }

//     getInfo() {
//         return this.name + ' ' + this.year
//     }
//   }
 
// const myCar = new Car({name: "Ford", year: "2014"});
// demo.innerHTML = myCar.name + " " + myCar.year;
// console.log(myCar.name + " " + myCar.year);



// secondo modo di definire una classe e creare un oggetto sulla sua base
// FUNZIONA CON ENTRAMBE LE SINTASSI... QUI NON CI SONO LE GRAFFE
// class Car {

//     // QUI NON DEFINISC PRIMA NAME E YEAR, FUNZIONA LO STESSO
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
  
// //   QUI METTO DIRETTAMENTE I VALORI, SENZA PROPRIETà
//   const myCar = new Car("Ford", 2014);
//   document.getElementById("demo").innerHTML =
//   myCar.name + " " + myCar.year;


// ---------------------------------------


// return di più valori
// function numeri(numero) {
//     let numeroNuovo = numero+1;

// questo return con le graffe è tipo un oggetto ai suoi arbori
//     return {numero, numeroNuovo}
// }

// console.log(numeri(2));
// console.log(numeri(2).numero);
// console.log(numeri(2).numeroNuovo);



// ---------------------------------------


const titoloH3 = document.getElementById('titolo');
titoloH3.style.backgroundColor = 'blue';
titoloH3.style.color = 'white';



// const liElements = document.querySelectorAll('li');
const liElements = document.getElementsByTagName('li');

console.log(liElements);

for ( i=0; i < liElements.length; i++) {
    liElements[i].style.color = "red";
}





