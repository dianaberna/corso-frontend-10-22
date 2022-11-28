// OGGETTI DI JAVASCRIPT

// notazione ad oggetto
let roxana = {
    nome: 'Roxana',
    cognome: 'Mihai',
    anni: 28,
    genere: 'femminile'
}
console.log(roxana);
console.log(roxana.anni);

// classe --> è il "modello astratto", 
// es classe persona, i vari oggetti di questa classe: roxana, diana, simone...
// classe -> auto
// oggetti -> fiat, volvo, ford, toyota.....
// classe: concetto astratto
// oggetto: instanza di una classe che possiede proprietà e metodi

class Persona {
    // qui nella classe ci metto proprietà e metodi
    nome = ''
    cognome = ''
    saluta() {
        console.log('ciao');
    }
    getName() {
        return this.name
    }
    getFullName() {
        return this.nome + ' ' + this.cognome
    }

// COSTRUTTORE quando io creo un'stanza di questa classe gli passo le proprietà che voglio mantenere
    // l'istanza eredita le proprietà de quella classe 
    constructor({nome, cognome}) {
        this.nome = nome
        this.cognome = cognome
    }
}

let primaPersona = new Persona({
    nome: 'roxana',
    cognome: 'mihai'
})

console.log(primaPersona.cognome);
console.log(primaPersona.saluta());
console.log(primaPersona.getFullName());


// json usa la notazione ad pggetti
// prima di json si usavano file xml per trasmettere dati ma era più difficile gestirlo





let macchine = {
    
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        "members": [
          {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
          },
          {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
              "Million tonne punch",
              "Damage resistance",
              "Superhuman reflexes"
            ]
          },
          {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
              "Immortality",
              "Heat Immunity",
              "Inferno",
              "Teleportation",
              "Interdimensional travel"
            ]
          }
        ]
      }

console.log('JSON');
console.log(macchine.formed);
console.log(macchine.members);
console.log(macchine.members[0]);
console.log(macchine.members[0].age);
console.log(macchine.members[0].powers);
console.log(macchine.members[0].powers[1]);





// TORNIAMO A PRIMA
let arrayCar = ['fiat', '500', '2016'];

// così creo un oggetto
let car500 = {
    modello: 'fiat',
    anno: 2016,
    tipo: '500'
}

// così creo una classe astratta (nota che uno di nuovo = come assegnazione, e il ; per dividere i valori)
class Car {
    modello = '';
    anno = '';
    tipo = ''

    constructor({modello, anno, tipo}) {
        this.modello = modello,
        // se io faccio così dico "quando richiamo fordFiesta.anno tu di mevi dare il tipo"
        // ovviamente qui ho sbagliato di proposito
        this.anno = tipo
        this.tipo = tipo
        // vuol dire che quando richiamo fordFiesta.tipo tu di mevi dare il tipo (e non l'anno)
    }
} 

// PER COSTRUIRE UN OGG SPECIFICO DA QUELLA CLASSE HO BISOGNO DEL COSTRUTTORE DENTO ALLA CLASSE!
// ALTRIMENTI HO TUTTO VUOTO, NON ACCEDE E NON ASSEGNA NULLA
let fordFiesta = new Car({
    modello: 'ford',
    anno: '2014',
    tipo: 'fiesta'
})


console.log(fordFiesta);
console.log(fordFiesta.tipo);
console.log(fordFiesta.anno);
