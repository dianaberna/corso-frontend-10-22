// notazione ad oggetto -> non creo una vero
let car = { // non descrivo un blocco di codice ma un vero e dato
    type: "Fiat", 
    model: "500", 
    color: "white"
};

let arraycar = [ "Fiat", "500", "white" ]
console.log(arraycar.length)

console.log(arraycar[0])
console.log(car.type)

/*
    classe -> è una struttura che serve in informatica 
    per descrivere un modello reale o astratto
    oggetto ->  è una instanza di una classe che possiede 
    proprietà e metodi
*/
// programmazione ad oggetti -> oop 

class Persona {
    // proprietà -> variabili all'interno della classe 
    name = ""
    surname = ""
    
    constructor({ name, surname}){
        // this -> mi serve per accedere alle proprietà della classe
        this.name = name
        this.surname = surname
    }

    // metodi -> funzioni interne alla classe che uso per
    // manipolare le mie proprietà 
    getName(){
        return this.name
    }
    getSurname(){
        return this.surname
    }
    getFullName() {
        return this.name + " " + this.surname
    }
}

// è come si creasse una copia di Persona con i nostri dati
// creo un oggetto della mia classe Persona
let primapersona = new Persona({name: "Diana", surname: "Bernabei"})

console.log(primapersona.name)
console.log(primapersona.getFullName())

// esempio json 

let esempio = {
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

console.log(esempio.formed)
console.log(esempio.members[0].name)

