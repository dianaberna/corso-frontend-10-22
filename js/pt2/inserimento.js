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

let titolo2 = document.createElement("h2")
let testo2 = document.createTextNode("2")
titolo2.appendChild(testo2)

let titolo3 = document.createElement("h3")
let testo3 = document.createTextNode("3")
titolo3.appendChild(testo3)

let titolo4 = document.createElement("h4")
let testo4 = document.createTextNode("4")
titolo4.appendChild(testo4)

// insertAdjacent
mioDiv.insertAdjacentElement("beforebegin", titolo1)
mioDiv.insertAdjacentElement("afterbegin", titolo2)
mioDiv.insertAdjacentElement("beforeend", titolo3)
mioDiv.insertAdjacentElement("afterend", titolo4)

let svgPlus = "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M13 8H8V13C8 13.55 7.55 14 7 14C6.45 14 6 13.55 6 13V8H1C0.45 8 0 7.55 0 7C0 6.45 0.45 6 1 6H6V1C6 0.45 6.45 0 7 0C7.55 0 8 0.45 8 1V6H13C13.55 6 14 6.45 14 7C14 7.55 13.55 8 13 8Z' fill='#161616'/></svg>";
mioDiv.insertAdjacentHTML("afterbegin", svgPlus)

// innerHTML
let paragrafo = document.querySelector("div#mioDiv > p");
paragrafo.innerHTML = 'bla bla <span class="ciao">gretw</span>bla'