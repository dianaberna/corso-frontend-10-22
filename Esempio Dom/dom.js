// seleziona tramite id
document.getElementById("primotitolo").style.backgroundColor = "yellow"; // attenzione js è case-sensitive !!!

// seleziona tramite nome tag
// non possiamo fare document.getElementsByTagName("li").style.backgroundColor perché è un array e non una singola variabile
let vociLista = document.getElementsByTagName("li");

for (let i = 0; i < vociLista.length; i++) {
    vociLista[i].style.backgroundColor = "red";
}

// seleziona tramite il nome della classe
let paragrafiBlu = document.getElementsByClassName("blue");

for (let i = 0; i < paragrafiBlu.length; i++) {
    paragrafiBlu[i].style.backgroundColor = "blue";
}

// seleziona tramite selettori css
// querySelector -> solo il primo elemento
let sottoinsiemeParagrafiSingolo = document.querySelector("div > .blue");
/* console.log(sottoinsiemeParagrafiSingolo) */

sottoinsiemeParagrafiSingolo.style.fontSize = "25px";

// querySelectorAll -> tutti gli elementi
let sottoinsiemeParagrafi = document.querySelectorAll("div > .blue");
/* console.log(sottoinsiemeParagrafi) */
for (let i = 0; i < sottoinsiemeParagrafi.length; i++) {
    sottoinsiemeParagrafi[i].style.backgroundColor = "green";
}

// queste due chiamate sono identiche
// let classeBlue = document.querySelectorAll(".blue")
// let paragrafiBlu = document.getElementsByClassName("blue");

// creiamo un nuovo titolo di tipo h1 con testo "ciao mondo"
const posizioneNelDom = document.getElementById("contenitore");
// creo un nodo testuale per il contenuto
const testoh1 = document.createTextNode("ciao mondo");
// creo l'elemento
const nuovoh1 = document.createElement("h1");
// appendo il testo nell'elemento
nuovoh1.appendChild(testoh1);
// appendo l'elemento al tag selezionato
posizioneNelDom.appendChild(nuovoh1);

const nuovocontenitore = document.getElementById("nuovocontenitore");
// creo il testo nel paragrafo
const testoParagrafo = document.createTextNode("ciao!!!");
// creo il paragrafo
const nuovoParagrafo = document.createElement("img");  // <p></p>
nuovoParagrafo.className = "red" // <p class="red"></p>
nuovoParagrafo.id = "prova" // <p class="red" id="prova"></p>
// appendere il testo al paragrafo
nuovoParagrafo.appendChild(testoParagrafo);
// creo il div
const nuovoDiv = document.createElement("div");
// appendere il paragrafo al div appena creato
nuovoDiv.appendChild(nuovoParagrafo);
// appendo il nuovo div a quello selezionato in partenza
nuovocontenitore.appendChild(nuovoDiv);

// cancelliamo il paragrafo interno al div di id "cancellami"
// selezionare il paragrafo figlio di div con id "cancellami"
let paragrafiDaCancellare = document.querySelectorAll("div#cancellami > p"); // ci restituisce un array
// rimuovere l'elemento selzionato
for (let i = 0; i < paragrafiDaCancellare.length; i++) {
    paragrafiDaCancellare[i].remove();
}

// aggiorno il contenuto del tag con id "aggiornami"
// seleziono il tag
let paragrafoDaAggiornare = document.getElementById("aggiornami");
// aggiorno il contenuto
paragrafoDaAggiornare.innerHTML = "Ciao mondo!!!!! :) ";
paragrafoDaAggiornare.innerHTML = "Ciao mondo!!!!! <span>:)</span> ";

// la riga che segue mi cancella tutto il dom
// let resetBody = (document.getElementsByTagName("body")[0].innerHTML = "");
// comprendo l'url -> resetto il dom (rimanendo nello stesso file html) -> aggiungo  il nuovo dom

// in react ci ritroveremo questa situazione
// index.html -> js -> avere una parte fissa (menu) e tutto il resto della pagina "dinamico" rispetto al cambio dell'url