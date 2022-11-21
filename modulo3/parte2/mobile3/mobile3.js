const body = document.body;

function creaElemento({tipo, posizione, classe, contenuto, attributi}) {

    let nuovoElemento = document.createElement(tipo)

    if (posizione) {
        posizione.appendChild(nuovoElemento)
    }

    if (classe) {
        nuovoElemento.classList = classe
    }

    if (contenuto) {
        let testoElemento = document.createTextNode(contenuto)
        nuovoElemento.appendChild(testoElemento)
    }

    if (attributi) {
        if (attributi.src && attributi.alt) {
            nuovoElemento.src = attributi.src
            nuovoElemento.alt = attributi.alt
        }

        if (attributi.id) {
            nuovoElemento.id = attributi.id
        }

        if (attributi.for) {
            // for è una keyword di js quindi devo farlo con setAttribute
            nuovoElemento.setAttribute('for', attributi.for)
        }

        if (attributi.type && attributi.name) {
            nuovoElemento.type = attributi.type
            nuovoElemento.name = attributi.name
        }
    }

    // ci deve essere il return!!! ricordati!!!
    return nuovoElemento
}

let mainContainer = creaElemento({tipo: 'div', posizione: body, classe: 'main-container'});

let titoloPagina = creaElemento({tipo: 'h1', posizione: mainContainer, contenuto: 'Settings'})
let sottotitoloPagina = creaElemento({tipo: 'h2', posizione: mainContainer, contenuto: 'PROFILE PICTURE'})
let paragrafoPagina = creaElemento({tipo: 'p', posizione: mainContainer, contenuto: 'Your profile picture can only be seen by you'})

let immUser = creaElemento({tipo: 'div', posizione: mainContainer, classe: 'circle'})

let svgImage = "<svg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M0.5 15.4596V18.4996C0.5 18.7796 0.72 18.9996 1 18.9996H4.04C4.17 18.9996 4.3 18.9496 4.39 18.8496L15.31 7.93957L11.56 4.18957L0.65 15.0996C0.55 15.1996 0.5 15.3196 0.5 15.4596ZM18.21 5.03957C18.6 4.64957 18.6 4.01957 18.21 3.62957L15.87 1.28957C15.48 0.89957 14.85 0.89957 14.46 1.28957L12.63 3.11957L16.38 6.86957L18.21 5.03957Z' fill='#161616'/> </svg>"

let buttonEdit = creaElemento({tipo: 'button', posizione: mainContainer, contenuto: 'Edit profile'})
buttonEdit.insertAdjacentHTML('afterbegin', svgImage);
// creaElemento({tipo: 'img', posizione: buttonEdit, attributi: {src: './edit-icon.png', alt: 'testo alternativo'}})



let sottotitoloPagina2 = creaElemento({tipo: 'h2', posizione: mainContainer, contenuto: 'GENERAL INFORMATION'})

let formPagina = creaElemento({tipo: 'form', posizione:mainContainer})


let arrayLabel = [
    {
        label: 'NAME',
        for: 'name'
    },
    {
        label: 'SURNAME',
        for: 'surname'
    },
    {
        label: 'EMAIL',
        for: 'email'
    },
    {
        label: 'LOCATION',
        for: 'location'
    }
]



let arrayInput = [
    {
        type: 'text',
        name: 'name',
        id: 'name' 
    },
    {
        type: 'text',
        name: 'surname',
        id: 'surname' 
    },
    {
        type: 'email',
        name: 'email',
        id: 'email' 
    },
    {
        type: 'text',
        name: 'location',
        id: 'location' 
    }
]


// for (i=0, j=0; i < arrayLabel.length || j < arrayInput.length; i++, j++) {
for (i=0; i < arrayLabel.length; i++) {
    creaElemento({tipo: 'label', posizione: formPagina, contenuto: arrayLabel[i].label, attributi: {for: arrayLabel[i].for}})
    creaElemento({tipo: 'input', posizione: formPagina, attributi: {type: arrayInput[i].type, name: arrayInput[i].name, id: arrayInput[i].id}})
}

// for (i=0; i < arrayInput.length; i++) {
//     creaElemento({tipo: 'input', posizione: formPagina, attributi: {type: arrayInput[i].type, name: arrayInput[i].name, id: arrayInput[i].id}})
// }



let buttonInvio = creaElemento({tipo: 'button', posizione: formPagina, contenuto: 'INVIA', attributi: {id: 'invia'} })