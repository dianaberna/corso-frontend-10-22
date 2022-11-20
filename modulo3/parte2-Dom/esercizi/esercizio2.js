//Realizzare una pagina web con js in cui inserire un input testuale dove il testo inserito rappresenta le regole css da applicare ad un div sottostante

const head = document.querySelector("head");
const body = document.querySelector("body");

let newStyle = document.createElement("style");
head.appendChild(newStyle);

let newInput = document.createElement("input");
newInput.type="text";

newInput.placeholder="inserisci del codice CSS per modificare il div sottostante";
let inputValue= newInput.value="margin: 2rem; width: 400px; height: 400px; background-color: yellow";

newInput.style.width="500px"
newInput.style.marginRight="0.5rem"
body.appendChild(newInput);
let newButt = document.createElement("button");
body.appendChild(newButt);
let newButtText = document.createTextNode("Aggiorna sito");
newButt.appendChild(newButtText);
let newDiv = document.createElement("div");
newDiv.id="newDiv"
body.appendChild(newDiv);
let newStyleAttributes = document.createTextNode("#newDiv{"+inputValue+"}") 
newStyle.appendChild(newStyleAttributes);

newButt.onclick = function () {
  inputValue = newInput.value.replace();
  newStyleAttributes = document.createTextNode("#newDiv{"+inputValue+"}");
  newStyle.appendChild(newStyleAttributes);
}

// provato ad inserire codice malevolo }</style><script>console.log("codice malevolo")</script><style>{ ma non ha funzionato
// forse avrebbe funzionato se anzichè utilizzare il createTextNode avessi utilizzato l'innerHTML

// nel caso di utilizzo dell'innerHTML bisogna fare dei controlli come:
// - fare in modo che non si possano inserire caratteri come <>,{}, ecc...

// qui sotto c'è un tentativo fallimentare di creare una variabile che potesse far scrivere gli attributi css direttamente in js

/* 
divAttributes = inputValue.replaceAll(";","")
divAttributes = divAttributes.split(" ");
for (let i = 0; i < divAttributes.length; i++) {
  //newDiv.style.divAttributes[i]=divAttributes[i+1];
  x=divAttributes[i];
  y=divAttributes[i+1];
  newDiv.style.x=y;
  i++
}
 */