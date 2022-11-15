//posso andare a modificare il CSS da js
//sconsigliato
document.getElementById ("primotitolo").style.backgroundColor = "yellow";

//solo id ha getElement, perchè è uno solo
//gli altri ci restituiranno un elenco di risultati

let vociLista = document.getElementsByTagName ("li");
console.log (vociLista);
for (let i = 0; i < vociLista.length; i++){
    vociLista [i].style.backgroundColor = "red";
}

//posso anche poi richiamarne solo uno
vociLista[1].style.backgroundColor = "blue";

//selezione tramite il nome della classe
let paragrafiBlu = document.getElementsByClassName ("blue");

for (let i = 0; i < paragrafiBlu.length; i++){
    paragrafiBlu [i].style.color = "blue";
}

//selezione tramite selettori css

//querySelector = prende solo il primo
let sottoinsiemeParagrafiSingolo = document.querySelector ("div > .blue");
console.log (sottoinsiemeParagrafiSingolo);


//querySelectorAll = prende tutti
let sottoinsiemeParagrafi = document.querySelectorAll ("div > .blue");
console.log (sottoinsiemeParagrafi);

sottoinsiemeParagrafiSingolo.style.fontSize = "25px";

for (let i = 0; i < sottoinsiemeParagrafi.length; i++){
    sottoinsiemeParagrafi [i].style.fontSize = "30px";
}


//queste due cose sono equivalenti
//let classeBlu = document.querySelectorAll (".blue");
//let paragrafiBlu = document.getElementsByClassName ("blue");



//AGGIUNGERE UN ELEMENTO 
let posizioneNelDom = document.getElementById ("contenitore");
//creiamo un nuovo titolo di tipo h1 con testo "ciao mondo"

let testoh1 = document.createTextNode ("ciao mondo");
let nuovoh1 = document.createElement ("h1");
//appendo il testo all'interno di h1
nuovoh1.appendChild(testoh1)
//mi manca attaccare nuovoh1 in posizioneNelDom
posizioneNelDom.appendChild(nuovoh1);

let nuovocontenitore = document.getElementById ("nuovocontenitore");
let testoP = document.createTextNode ("ciao!");
let nuovoParagrafo = document.createElement ("p");
nuovoParagrafo.appendChild (testoP);
let nuovoDiv = document.createElement ("div");
nuovoDiv.appendChild (nuovoParagrafo);
nuovocontenitore.appendChild (nuovoDiv);