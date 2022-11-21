window.addEventListener('load', () => {

    let primoNumero = Math.floor(Math.random()*255)
    let secondoNumero = Math.floor(Math.random()*255)
    let terzoNumero = Math.floor(Math.random()*255)

    console.log(primoNumero);
    console.log(secondoNumero);
    console.log(terzoNumero);

    const body = document.body;

    let creaColore = 'rgb(' + primoNumero + ', ' + secondoNumero + ', ' + terzoNumero + ')'

    body.style.backgroundColor = creaColore


    body.style.height = '100vh';
    body.style.display = 'flex';
    body.style.justifyContent = 'center';
    body.style.alignItems = 'center';
    body.style.fontFamily = "'Poppins', sans-serif";

    const paragrafoCodiceColore = document.createElement('p');
    const codiceColore = document.createTextNode(creaColore);

    paragrafoCodiceColore.style.fontSize = '2rem'

    body.appendChild(paragrafoCodiceColore)
    paragrafoCodiceColore.appendChild(codiceColore)

})