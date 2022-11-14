let car ={
  type: "Fiat",
  model: "500",
  color: "white"
};

console.log(car.type+" "+car.model+" "+car.color)

class Persona{
  firstname=""
  surname=""
  constructor({firstname,surname}){
    this.firstname = firstname
    this.surname=surname
  }
  getName(){
    return this.firstname
  }
  getSurname(){
    return this.surname
  }
  getFullName(){
    return this.firstname +" "+ this.surname
  }
}

let primaPersona = new Persona({
  firstname: "Luca",
  surname: "Pennini"
})

console.log(primaPersona.firstname)
console.log(primaPersona.getFullName())


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