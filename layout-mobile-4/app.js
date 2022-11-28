const buttonInvia = document.getElementById('invia');
// const demo = document.getElementById('demo');


function mostraTesti() {

    const demo = document.getElementById('demo');

    const inputName = document.getElementById('name');

    const paragrafoName = document.createElement('p');
    const testoParagrafoName = document.createTextNode("sbagliato");
    
    console.log(testoParagrafoName);
    

    paragrafoName.appendChild(testoParagrafoName);

    inputName.insertAdjacentElement('afterEnd', paragrafoName);
    // div.appendChild(paragrafoName);

    buttonInvia.style.backgroundColor = 'green';

    // OVVIAMENTE DEVO DARE UNO STILE ALL'ELEMENTO! NON AL TEXT NODE
    paragrafoName.style.color = 'red';
    paragrafoName.style.marginBottom = '1rem';


    const paragrafoName2 = document.createElement('p');
    const testoParagrafoName2 = document.createTextNode("sbagliato");
    paragrafoName2.appendChild(testoParagrafoName2);

    demo.appendChild(paragrafoName2);
    console.log(testoParagrafoName2);


}

let divEtichette = document.getElementById('etichette')

let badges =  ['hot', 'cold', 'warm'];

for (i=0; i < badges.length; i++) {
    let span = document.createElement('span')
    let testoSpan = document.createTextNode(badges[i]);
    span.appendChild(testoSpan)
    divEtichette.appendChild(span)
}


buttonInvia.addEventListener('click', mostraTesti);