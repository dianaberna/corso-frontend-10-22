let body = document.body

const cardsArray = [
    {
        image: {
            src: './images/geek.png',
            alt: 'geek'
        },
        title: 'IT Geek'
    },
    {
        image: {
            src: './images/hacker.png',
            alt: 'hacker'
        },
        title: 'Hacker'
    },
    {
        image: {
            src: './images/fingerprint-scan.png',
            alt: 'better hacker'
        },
        title: 'Better Hacker'
    },
    {
        image: {
            src: './images/binary-code.png',
            alt: 'Excellent Hacker'
        },
        title: 'Excellent Hacker'
    }
]

function creaElemento({tipo, posizione, contenuto, classe, attributi}) {

    let elementoNuovo = document.createElement(tipo);
    if (contenuto) {
        let testoElemento = document.createTextNode(contenuto);
        elementoNuovo.appendChild(testoElemento);
    }
    if (posizione) {
        posizione.appendChild(elementoNuovo);
    } 
    if (attributi) {
        if (attributi.src && attributi.alt) {
            elementoNuovo.src = attributi.src
            elementoNuovo.alt = attributi.alt
        }
    }
    if (classe) {
        elementoNuovo.className = classe;
    }

    return elementoNuovo;
}


let mainContainer = creaElemento({tipo: 'div', posizione: body, classe: 'main-container'})
let titoloPagina = creaElemento({tipo: 'h1', posizione: mainContainer, contenuto: 'Select your goals you wish to accomplish'});
let container = creaElemento({tipo: 'div', posizione: mainContainer, classe: 'cards'})

for (let i = 0; i < cardsArray.length; i++) {

    let card = creaElemento({tipo: 'div', posizione: container, classe:'card'});
    let divImage = creaElemento({ tipo: 'div', posizione: card});

    creaElemento({
        tipo: 'img',
        posizione: divImage,
        attributi: cardsArray[i].image
    });
    creaElemento({
        tipo: 'h2',
        posizione: card,
        contenuto: cardsArray[i].title
    });

}


// CARD DI RIFERIMENTO
/* <div class="card">
    <div><img src="./images/geek 1.png" alt=""></div>
    <h2>IT Geek</h2>
</div> */