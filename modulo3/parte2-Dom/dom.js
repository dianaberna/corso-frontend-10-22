let posizioneNelDom = document.getElementById("contenitore");
let testoH1 = document.createTextNode("Ciao mondo");
let nuovoH1 = document.createElement("h1");
nuovoH1.appendChild(testoH1);
posizioneNelDom.appendChild(nuovoH1);

//-----------------------
const nuovoDiv = document.createElement("div");

let paragrafoDaCancellare = document.querySelectorAll(
  "#cancellami>p:nth-of-type(odd)"
);
for (let i = 0; i < paragrafoDaCancellare.length; i++) {
  paragrafoDaCancellare[i].remove();
}

let paragrafoDaAggiornare = document.getElementById("aggiornami");
paragrafoDaAggiornare.innerHTML = "Ciao mondo!!!!!!! :)";
