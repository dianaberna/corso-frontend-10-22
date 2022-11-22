//Realizzare una pagina web dove è presente un input testuale in cui è gestito ogni sua versione
// o stato, cioè default, evento hover, evento focus, evento keydown, evento change, stato 
// disabilitato, stato errore, stato corretto. 
const body = document.querySelector("body");

let buttonArray = ["default","hover","focus","keydown","change","disabled","error","correct"]

let newMainDiv = document.createElement("div")
{ // newMainDiv styles
  newMainDiv.style.display="grid"
  newMainDiv.style.gridTemplateColumns="1fr 1fr"
  newMainDiv.style.width="500px"
}
body.appendChild(newMainDiv);
let newDiv 
let newParagraph 
let newParagraphText
let newInput

for (let index = 0; index < buttonArray.length; index++) { // creazione inputs ed etichette
  newDiv = document.createElement("div")
  newParagraph = document.createElement("p")
  newParagraph.style.margin="1rem 0 0.25rem 0"
  newInput = document.createElement("input")
  newMainDiv.appendChild(newDiv);
  newDiv.appendChild(newParagraph);
  newParagraphText = document.createTextNode(buttonArray[index])
  newParagraph.appendChild(newParagraphText);
  newDiv.appendChild(newInput);
  newInput.id=buttonArray[index]
  newInput.addEventListener
}
