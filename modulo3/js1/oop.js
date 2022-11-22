// oggetto macchina -> notazione ad oggetto

let car = {
    type: "Fiat",
    model: "500",
    color: "white",
};

console.log(car.type); // Fiat
let arraycar = ["Fiat", "500", "white"]; // negli array sono delle semplici stringhe senza significato
i = 0;
console.log(arraycar.length);
console.log(arraycar);
console.log("stampo", i, arraycar[i]);

// classe -> è una struttura che serve in informatica per descrivere un modello reale o astratto es.persona
// oggetto --> è una instanza di una classe che possiede proprietà e metodi panda istanza della classe auto,
//              è simile ad altri oggetti

class Persona {
    // il nome della classe deve avere la prima lettere maiuscola -> creo la classe
    // proprietà --> variabili all'interno della classe
    name = "";
    surname = "";
    // constructor è una funzione
    constructor({ name, surname }) {
            // funzione, prende i valori e fa una copia della classe originale
            // this--> mi serve per accedere alla proprietà della classe
            this.name = name;
            this.surname = surname;
        }
        // metodi -> funzioni interne alla classe che uso per manipolare le mie proprietà

    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getFullName() {
        return this.name + "" + this.surname;
    }
}

// è come se si creasse copia di Persona con i nostri dati
// let primapersona = new Persona({
//     name: "Daniela",
//     surname: "Matei",
// });

// - Persona -> copia di Persona assegnata alla variabile primapersona con proprietà
/*
    name: "Daniela",
       surname: "Matei"
- creo un oggetoo della mia classe Persona
- Quando farà il new riachiamerà il construttore della classe così da creare fisicamente la nostra
- copiare la classe
*/

//creo un oggetto della mia classe Persona

let primapersona = new Persona({
    /// faccio un altro figlio dove gli passo i nuovi valori
    name: "Daniela",
    surname: "Matei",
});

console.log(primapersona.name);
console.log(primapersona.getFullName());

// esempio json

let esempio = {
    squadName: "Super hero squad",
    homeTown: "Metro City",
    formed: 2016,
    secretBase: "Super tower",
    active: true,
    members: [{
            name: "Molecule Man",
            age: 29,
            secretIdentity: "Dan Jukes",
            powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
        },
        {
            name: "Madame Uppercut",
            age: 39,
            secretIdentity: "Jane Wilson",
            powers: [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes",
            ],
        },
        {
            name: "Eternal Flame",
            age: 1000000,
            secretIdentity: "Unknown",
            powers: [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel",
            ],
        },
    ],
};

console.log(esempio.formed);
console.log(esempio.members[0].name);