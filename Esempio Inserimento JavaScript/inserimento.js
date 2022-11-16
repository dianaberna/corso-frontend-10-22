// genitore.appendChild(figlio) -> sia padre che figlio devono essere nodi e non semplice testo

// elemento_selezionato.insertAdjacentHTML(posizione, testo oppure nodo sottoforma di stringa)
// quivalente al .innerHTML però non modifica solo il contenuto dell'elemento_selezionato
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML

// elemento_selezionato.insertAdjacentElement(posizione, nuovo_nodo)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement

let mioDiv = document.getElementById("mioDiv")
// posizione

let titolo1 = document.createElement("h1")
let testo1 = document.createTextNode("1")
titolo1.appendChild(testo1)

let titolo2 =  document.createElement("h2")
let testo2 = document.createTextNode("2")
titolo2.appendChild(testo2)

let titolo3 =  document.createElement("h3")
let testo3 = document.createTextNode("3")
titolo3.appendChild(testo3)

let titolo4 =  document.createElement("h4")
let testo4 = document.createTextNode("4")
titolo4.appendChild(testo4)

mioDiv.insertAdjacentElement("beforebegin", titolo1)
mioDiv.insertAdjacentElement("afterbegin", titolo2)
mioDiv.insertAdjacentElement("beforeend", titolo3)
mioDiv.insertAdjacentElement("afterend", titolo4)

mioDiv.insertAdjacentHTML("afterend", "prova dopo la fine del div <span>ciao</span>")

// innerHTML
let paragrafo = document.querySelector("div#mioDiv > p");
paragrafo.innerHTML = 'bla bla <span class="ciao">gretw</span>bla'