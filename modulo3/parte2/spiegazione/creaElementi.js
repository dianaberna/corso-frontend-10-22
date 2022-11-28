const demo = document.getElementById('demo')


// FUNZIONE PER CREARE UN ELEMENTO
function creaElemento(tipo, contenuto, classe, posizione, attributi) {

    let nuovoElemento = document.createElement(tipo);
    let contenutoElemento = document.createTextNode(contenuto);
    nuovoElemento.appendChild(contenutoElemento);

    
    if (classe != '') {
        nuovoElemento.className = classe;
    }


    posizione.appendChild(nuovoElemento);

    if(attributi.src && attributi.alt) {
        nuovoElemento.src = attributi.src;
        nuovoElemento.alt = attributi.alt;
    }

}


creaElemento('p', 'ciao', 'blue', demo);
// creaElemento('p', 'ciao', '', demo);
// creaElemento('p', '', 'blue', demo);
// creaElemento('span', 'ciao', 'blue', demo);
// creaElemento('div', 'ciao', 'blue', demo);
// creaElemento('h4', 'ciao', 'blue', demo);
// creaElemento('button', 'ciao', 'blue', demo);



const badges = ['caldo', 'freddo', 'tiepido']

for (i=0; i < badges.length; i++) {
    creaElemento('span', badges[i], 'yellow', demo);
}
