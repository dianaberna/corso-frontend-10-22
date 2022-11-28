const cardsContainer = document.getElementById('cards');

const cardsArray = [
    {
        image: {
            src: './images/lungs.png',
            alt: 'polmoni'
        },
        title: 'Breath focus',
        level: 'Level 2',
        progresso: {
            max: '100',
            value: '40'
        }
    },
    {
        image: {
            src: './images/Shape.png',
            alt: 'profilo'
        },
        title: 'Body scan',
        level: 'Level 3',
        progresso: {
            max: '100',
            value: '60'
        }
    },
    {
        image: {
            src: './images/knee-reflexes.png',
            alt: 'riflesso'
        },
        title: 'Breath focus',
        level: 'Level 4',
        progresso: {
            max: '100',
            value: '80'
        }
    }
]

function creaCard(tipo, posizione, classe) {
    let nuovaCard = document.createElement(tipo);
    posizione.appendChild(nuovaCard);
    nuovaCard.className = classe;
    return nuovaCard;
}

function creaElemento(tipo, posizione, classe, contenuto, attributi) {

    let nuovoElemento = document.createElement(tipo);

    if (classe != '') {
        nuovoElemento.className = classe;
    }

    // if (tipo == 'img') {
    //     nuovoElemento.src = attributi.src
    //     nuovoElemento.alt = attributi.alt
    // }
    // console.log(tipo);


    if (attributi) {
        if (attributi.src && attributi.alt) {
            nuovoElemento.src = attributi.src
            nuovoElemento.alt = attributi.alt
            console.log(attributi.src);
            console.log(attributi.alt);
        } 

     


        // if(attributi.massimo && attributi.valore) {
        if(attributi.max && attributi.value) {
            nuovoElemento.max = attributi.max
            nuovoElemento.value = attributi.value
            // nuovoElemento.max = attributi.massimo
            // nuovoElemento.value = attributi.valore
            // nuovoElemento.max = massimo
            // nuovoElemento.value = valore
        }
    }

    let contenutoElemento = document.createTextNode(contenuto)
    nuovoElemento.appendChild(contenutoElemento)

    posizione.appendChild(nuovoElemento);

    return nuovoElemento;
}


for (let i = 0; i < cardsArray.length; i++) {

    let card = creaCard('div', cardsContainer, 'card')

// IMMAGINE---
    let containerImage = creaCard('div', card, 'card-img')
    // let immagineCard = creaElemento('img', containerImage, '', '', cardsArray[i].image)
    creaElemento('img', containerImage, '', '', cardsArray[i].image)
// FINE IMMAGINE---

    let descriptionCard = creaElemento('div', card, 'description-card', '');
    let titleCard = creaElemento('h4', descriptionCard, '', cardsArray[i].title)
    let levelCard = creaElemento('p', descriptionCard, '', cardsArray[i].level)

    let progressBarElement = creaElemento('progress', descriptionCard, '', '', cardsArray[i].progresso)


    console.log(cardsArray[i].progresso);
    console.log(cardsArray[i].progresso['max']);

    // console.log(massimo);
    // console.log(attributi.valore);
    // console.log(attributi.max);
    // console.log(attributi.value);
}


/* CARD DI RIFERIMENTO --------------
 <div class="card">
    <div class="card-img"><img src="./images/lungs.png" alt=""></div>
    <div class="description-card">
        <h4>Breath focus</h4>
        <p>Level 2</p>
        <progress  value="40" max="100"></progress>
    </div>
</div> */
