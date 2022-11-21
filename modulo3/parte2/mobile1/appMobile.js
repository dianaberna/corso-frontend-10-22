const cardsContainer = document.getElementById('cards');

const cardsArray = [
    {
        image: {
            src: './images/lungs.png',
            alt: 'polmoni'
        },
        title: 'Breath focus',
        level: 'Level 2',
        progress: {
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
        progress: {
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
        progress: {
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

        if(attributi.max && attributi.value) {
            nuovoElemento.max = attributi.max
            nuovoElemento.value = attributi.value
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

    let progressBarElement = creaElemento('progress', descriptionCard, '', '', cardsArray[i].progress)

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



// DATA
// let today = new Date()
// console.log(today.getHours());
// console.log(today.getMinutes());
// console.log(today.getSeconds());

// const ore = today.getHours()
// const minuti = today.getMinutes()
// const secondi = today.getSeconds()

// const myTimeout = setTimeout(mostraOra, 1000);
// const myTimeout = setInterval(mostraOra(), 1000);


// function mostraOra() {

//     let today = new Date()

//     const ore = String(today.getHours())
//     const minuti = String(today.getMinutes())
//     const secondi = String(today.getSeconds())


//     // const ore = today.getHours()
//     // const minuti = today.getMinutes()
//     // const secondi = today.getSeconds()

//     const mostraOre = ore + minuti + secondi

//     // console.log(mostraOre);

//     return mostraOre
// }


// function sayHi() {
//     alert('Hello');
//   }
  
//   setTimeout(sayHi, 1000);

// per averlo in tempo reale: setTimeout ogni secondo, così si aggiorna ogni secondo