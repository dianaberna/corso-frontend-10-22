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

// voglio attributi come oggetto

function creaEl({ tipo, classe, parent, contenuto, attributi }) {
  let nuovoEl = document.createElement(tipo);
  if (attributi) {
    if (attributi.src && attributi.alt) {
      nuovoEl.src = attributi.scr;
      nuovoEl.alt = attributi.scr;
    };
  };
  if (contenuto) {
    let contenutoEl = document.createTextNode(contenuto);
    nuovoEl.appendChild(contenutoEl);
  };
  if (classe != "") {
    nuovoEl.className = classe;
  };
  if (parent) {
    // se c'è il parent, appendi l'elemento al parent
    parent.appendChild(nuovoEl)
  };
  // posso restituire l'elemento (variabile) in ogni caso, anche nel caso (vedi: attributi) in cui non serve appoggiare i contenuti in esso.
  return nuovoEl;
};

let main = creaEl("main", "", document.body);

let mysection = document.createElement("section");
mysection.id = "weekdays";
document.body.appendChild(mysection);

let wrapper = creaEl({ tipo: "div", classe: "wrapper", parent: mysection });

//(tipo, classe, parent, contenuto, attributi)
for (let i = 0; i < arrayDays.length; i++) {

  let squareDate = creaEl({
    tipo: "div",
    classe: "",
    parent: wrapper,
  });

  creaEl({
    tipo: "p",
    classe: "",
    parent: squareDate,
    contenuto: arrayDays[i].dayName,
  });

  creaEl({
    tipo: "p",
    classe: "date-num",
    parent: squareDate,
    contenuto: arrayDays[i].dayNum,
  });

  // let DateDay = creaEl("p", "", squareDate, arrayDays[i].dayName, "");
  // let DateNum = creaEl("p", "date-num", squareDate, arrayDays[i].dayNum, "");
  // non richiamo le variabili ma è cmq ok: a livello di DOM, la funzione sopra appenderà comunque il loro contenuto al parent
}

//(tipo, classe, parent, contenuto, attributi)

