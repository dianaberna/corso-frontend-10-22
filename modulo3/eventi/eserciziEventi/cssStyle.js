window.addEventListener('load', () => {

    const body = document.body

    // creo la textarea
    let input = document.createElement('textarea')
    body.appendChild(input)
    input.style.padding = '1rem 1rem'
    input.style.width = '80%'
    input.style.display = 'block'
    input.style.margin = '1rem auto'

    // creo il button
    let buttonModifiche = document.createElement('button')
    let modifica = document.createTextNode('modifica')
    buttonModifiche.appendChild(modifica)
    body.appendChild(buttonModifiche)
    buttonModifiche.style.display = 'block'
    buttonModifiche.style.margin = '2rem auto'

    // creo il div
    let div = document.createElement('div');
    body.appendChild(div)
    div.style.padding = '6rem'
    div.style.backgroundColor = 'yellow'
    div.style.margin = '0 2rem'
    div.style.border = '1px solid yellow'
    

    let testoTextarea = div.getAttribute('style')
    input.innerText = testoTextarea
    console.log(testoTextarea);

    buttonModifiche.addEventListener('click', () => {
        testoTextarea = input.value;
        console.log(testoTextarea);
        div.setAttribute('style', testoTextarea)
    })
})