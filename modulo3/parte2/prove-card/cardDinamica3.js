const bodyElement = document.body

const cardsArray = [
        {
            cover: {
                "src": "caffe.jpg",
                "alt": "caffè"
            },
            title: "Vanilla Latte",
            price: "21K",
            etichette: ["Hot", "Cold"],
            buttonTitle: "Aggiungi"
        },
        {
            cover: {
                "src": "caffe.jpg",
                "alt": "caffè"
            },
            title: "Cappuccino",
            price: "10K",
            etichette: ["Hot", "Cold", "Altro"],
            buttonTitle: "Aggiungi"
        },
        {
            cover: {
                "src": "caffe.jpg",
                "alt": "caffè"
            },
            title: "Caffè",
            price: "1K",
            etichette: ["Hot"],
            buttonTitle: "Aggiungi"
        }
]

function creaCard(tipo, classe, posizione) {
    let nuovaCard =  document.createElement(tipo);
    nuovaCard.className = classe;
    posizione.appendChild(nuovaCard)

    return nuovaCard;
}

function creaElemento(tipo, classe, posizione, contenuto, attributi) {

    let nuovoElemento =  document.createElement(tipo);

    let contenutoElemento = document.createTextNode(contenuto)

    if (contenuto) {
        nuovoElemento.appendChild(contenutoElemento)
    }

    if (tipo == 'img') {
        nuovoElemento.src = attributi.src
        nuovoElemento.alt = attributi.alt
    }

    if (classe) {
        nuovoElemento.className = classe;
    }

    if (posizione) {
        posizione.appendChild(nuovoElemento)
    } else {
        posizione = bodyElement
    }

    
    return nuovoElemento;
}


for(let i = 0; i < cardsArray.length; i++) {

    let nuovaCard = creaCard('div', 'card', bodyElement);
    
    let bodyCard = creaElemento('div', 'card-body', nuovaCard)
    let footerCard = creaElemento('div', 'card-footer', nuovaCard)


    let imageCard = creaElemento('img', '', bodyCard, '', cardsArray[i].cover)

    let divTitles = creaElemento('div', '', bodyCard)
    let h1Card = creaElemento('h1', '', divTitles, cardsArray[i].title)
    let priceCard = creaElemento('p', '', divTitles, cardsArray[i].price)

    let divEtichette = creaElemento('div', '', footerCard)

    // console.log(cardsArray[i]['etichette'].length);

    for (let j = 0; j < cardsArray[i]['etichette'].length; j++) {
        let badges = creaElemento('span', '', divEtichette, cardsArray[i].etichette[j])
    }

    let buttonCard = creaElemento('button', '', footerCard, cardsArray[i].buttonTitle )

}


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
