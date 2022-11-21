

let arrayPersone1 = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
];

let arrayPersone2 = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
];


function getBudgets(arrayEntrante) {

    let budgetsArray = 0;
    for (let i = 0; i < arrayEntrante.length; i++) {
        budgetsArray += arrayEntrante[i].budget;
        // return budgetsArray;
    }
    console.log(budgetsArray);
}

getBudgets(arrayPersone1);
getBudgets(arrayPersone2);



// esercizio 2

function getTotalPrice(array) {
    let prezzoTotale = 0;
    for (let i = 0; i < array.length; i++) {
        prezzoTotale += array[i].quantity * array[i].price;
    }

    let decimali2 = Number(prezzoTotale.toFixed(2));
    console.log(decimali2);
}


getTotalPrice([{ product: "milk", quantity: 1, price: 1.5 }]);

getTotalPrice([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "cereals", quantity: 1, price: 2.5 },
]);

getTotalPrice([{ product: "milk", quantity: 3, price: 1.5 }]);

getTotalPrice([
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "eggs", quantity: 12, price: 0.10 },
    { product: "bread", quantity: 2, price: 1.6 },
    { product: "cheese", quantity: 1, price: 4.5 },
]);

getTotalPrice([
    { product: "chocolate", quantity: 1, price: 0.10 },
    { product: "lollipop", quantity: 1, price: 0.20 },
]);





// DIVERSI MODI PER ACCEDERE AI VALORI
let arrayProva = [
    { product: "milk", quantity: 1, price: 1.5 },
    { product: "eggs", quantity: 12, price: 0.10 },
    { product: "bread", quantity: 2, price: 1.6 },
    { product: "cheese", quantity: 1, price: 4.5 },
]


// CON DOT NOTATIO
console.log(arrayProva[0].product);
// OPPURE COSì
console.log(arrayProva[0]['product']);
// RICORDATI LE VIRGOLETTE!!!!! così invece esce undefined
console.log(arrayProva[0][product]); 

