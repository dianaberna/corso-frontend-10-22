let bodyElement = document.body;
let badges = ['hot', 'cold']


// METODO DIRETTO --------------------------------------
// let card = document.createElement('div')
// card.className = 'card';

// bodyElement.appendChild(card);

// let cardBody = document.createElement('div');
// cardBody.className = 'card-body'
// card.appendChild(cardBody)

// let imgCard = document.createElement('img')
// imgCard.src = './caffe.jpg'
// imgCard.alt = 'capuccino con cuoricino'
// cardBody.appendChild(imgCard)

// let divTitles = document.createElement('div')
// cardBody.appendChild(divTitles)

// let h1Card = document.createElement('h1')
// let textH1Card = document.createTextNode('Capuccino')
// h1Card.appendChild(textH1Card)
// let pCard = document.createElement('p')
// let textpCard = document.createTextNode('21k')
// pCard.appendChild(textpCard)
// divTitles.appendChild(h1Card)
// divTitles.appendChild(pCard)

// let cardFooter = document.createElement('div')
// cardFooter.className = 'card-footer'

// card.appendChild(cardFooter)

// let divEtichette = document.createElement('div')
// divEtichette.className = 'etichette'

// cardFooter.appendChild(divEtichette)

// for (i=0; i < badges.length; i++) {
//     let badge = document.createElement('span');
//     let testoBadge = document.createTextNode(badges[i])
//     badge.appendChild(testoBadge)
//     divEtichette.appendChild(badge)
// }

// let button = document.createElement('button')
// let testoButton = document.createTextNode('aggiungi')
// button.appendChild(testoButton)
// cardFooter.appendChild(button)

// FINE METODO DIRETTO --------------------------------------




// creaElemento METODO TRAMITE FUNZIONE E PARAMETRI MULTIPLI -------------------
function creaElemento(tipo, testo, posizione, classe, src, alt) {
// function creaElemento(tipo, testo, posizione, classe, src, alt, attributi) {
// function creaElemento(tipo, testo, posizione, classe, attributi) {

    let elemento = document.createElement(tipo)
    let testoElemento = document.createTextNode(testo)
    elemento.appendChild(testoElemento)

    // non serve let
    // let posizioneElemento = posizione.appendChild(elemento)
    posizione.appendChild(elemento)

    elemento.className = classe

    // non funziona questo
    // if (elemento.src && elemento.alt) {
    if (src && alt) {
        elemento.src = src;
        elemento.alt = alt
    }

    // if (attributi.src && attributi.alt) {
    //     elemento.src = attributi.src;
    //     elemento.alt = attributi.alt
    // }

    // importante il return
    return elemento
}


// ----------------------------------------------------------------------
//  tutto dinamico in base a creaElemento
const demo = document.getElementById('demo')
const card3 = creaElemento('div', '', demo, 'card')
const cardBody3 = creaElemento('div', '', card3, 'card-body')
const cardFooter3 = creaElemento('div', '', card3, 'card-footer')

creaElemento('img', '', cardBody3, '', './caffe.jpg', 'cappuccino')
const divTitles3 = creaElemento('div', '', cardBody3)
creaElemento('h1', 'Vanilla Latte', divTitles3)
creaElemento('p', '21K', divTitles3)

const divEtichette3 = creaElemento('div', '', cardFooter3, 'etichette')
for (i=0; i < badges.length; i++) {
    creaElemento('span', badges[i], divEtichette3)
}

const button3 = creaElemento('button', 'aggiungi', cardFooter3)
// ----------------------------------------------------------------------
//  FINE creaElemento METODO TRAMITE FUNZIONE E PARAMETRI MULTIPLI   --------------



// PROVA EXTRA
// const prova = () => {
//         bodyElement.style.backgroundColor = 'bisque'
// }
// Button3.addEventListener('click', prova)



// CARD DI RIFERIMENTO
/* <div class="card">
    <div class="card-body">
        <img src="caffe.jpg" alt="caffe">
        <div>
            <h1>Vanilla Latte</h1>
            <p>21K</p>
        </div>
    </div>
    <div class="card-footer">
        <div class="etichette">
            <span>Hot</span>
            <span>Cold</span>
        </div>
        <button>Aggiungi</button>
    </div>
</div>  */