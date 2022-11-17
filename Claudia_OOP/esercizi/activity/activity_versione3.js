let arrayDays = [
  {
    dayName: "Mon",
    dayNum: 20,
  },
  {
    dayName: "Tue",
    dayNum: 21,
  },
  {
    dayName: "Wed",
    dayNum: 22,
  },
  {
    dayName: "Thu",
    dayNum: 23,
  },
  {
    dayName: "Fri",
    dayNum: 24,
  },
];

// console.log(arrayDays);

// se ho più attributi? creo una variabile che li contenga
function creaEl(tipo, classe, parent, contenuto, attributi) {
  let nuovoEl = document.createElement(tipo);
  if (attributi) {
    if (attributi.src && attributi.alt) {
      nuovoEl.src = attributi.scr;
      nuovoEl.alt = attributi.scr;
    };
  };
  if (contenuto) {
    // console.log(contenuto); // vedo se la funzione riceve quello che mi aspetto

    // se c'è il contenuto fai l'append del contenuto
    let contenutoEl = document.createTextNode(contenuto);
    nuovoEl.appendChild(contenutoEl);
  };
  if (classe != "") {
    // se c'è la classe, applica la classe
    nuovoEl.className = classe;
  };
  if (parent) {
    // se c'è il parent, appendi l'elemento al parent
    parent.appendChild(nuovoEl)
  };
  // posso restituire l'elemento (variabile) in ogni caso, anche nel caso (vedi: attributi) in cui non serve appoggiare i contenuti in esso.
  return nuovoEl;
};


//(tipo, classe, parent, contenuto, attributi)
// NB: document.body è una variabile, non va tra virgolette!

let main = creaEl("main", "", document.body);

let mysection = document.createElement("section");
mysection.id = "weekdays";
document.body.appendChild(mysection);

let wrapper = creaEl("div", "wrapper", mysection);


for (let i = 0; i < arrayDays.length; i++) {
  let squareDate = creaEl("div", "", wrapper, "", "");
  console.log(arrayDays[i].dayName);

  let DateDay = creaEl("p", "", squareDate, arrayDays[i].dayName, "");
  let DateNum = creaEl("p", "date-num", squareDate, arrayDays[i].dayNum, "");
  // non richiamo le variabili ma è cmq ok: a livello di DOM, la funzione sopra appenderà comunque il loro contenuto al parent
}

//(tipo, classe, parent, contenuto, attributi)

