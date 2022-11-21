window.addEventListener('load', function() {

    const bodyElement = document.body

    let inputArray = [
        {
            type: 'text',
            name: 'nome',
            id: 'nome',
            placeholder: 'Nome'
        },
        {
            type: 'text',
            name: 'cognome',
            id: 'cognome',
            placeholder: 'Cognome'
        },
        {
            type: 'email',
            name: 'email',
            id: 'email',
            placeholder: 'Email'
        },
        {
            type: 'password',
            name: 'password',
            id: 'password',
            placeholder: 'Password'
        },
        {
            type: 'password',
            name: 'conferma-password',
            id: 'conferma-password',
            placeholder: 'Conferma la password'
        }
    ]

    function creaElemento({tipo, posizione, attributi, id, contenuto}) {

        let nuovoElemento = document.createElement(tipo);

        if (posizione) {
            posizione.appendChild(nuovoElemento)
        }

        if (contenuto) {
            let contenutoElemento = document.createTextNode(contenuto)
            nuovoElemento.appendChild(contenutoElemento)
        }

        if (attributi) {
            if (attributi.type) {
                nuovoElemento.type = attributi.type
            }
            if (attributi.name) {
                nuovoElemento.name = attributi.name
            }
            if (attributi.placeholder) {
                nuovoElemento.placeholder = attributi.placeholder
            }
        }

        if (id) {
            nuovoElemento.id = id
        }

        return nuovoElemento

    }

    const formContainer = creaElemento({tipo: 'form', posizione: bodyElement});


    for (let i = 0; i < inputArray.length; i++) {
        creaElemento({tipo: 'input', posizione: formContainer, id: inputArray[i].id,  attributi: {type: inputArray[i].type , placeholder: inputArray[i].placeholder, name: inputArray[i].name}})
        console.log(i);
        // console.log({type: inputArray[i].type});
        // console.log({placeholder: inputArray[i].placeholder});
    }

    const buttonInvio = creaElemento({tipo: 'button', posizione: formContainer, contenuto: 'INVIA DATI'})

    


    const inputNome = document.getElementById('nome')
    const inputCognome = document.getElementById('cognome')
    const inputEmail = document.getElementById('email')
    const inputPassword = document.getElementById('password')
    const inputConfermaPassword = document.getElementById('conferma-password')


    




    buttonInvio.addEventListener('click', (e) => {
        e.preventDefault()    

        if (inputNome.value.match(/^[A-Za-z]+$/)) {
            inputNome.classList.add('success')
            inputNome.classList.remove('error')

        } else {
            inputNome.classList.add('error')
            inputNome.classList.remove('success')
        }

        if (inputCognome.value.match(/^[A-Za-z]+$/)) {
            inputCognome.classList.add('success')
            inputCognome.classList.remove('error')

        } else {
            inputCognome.classList.add('error')
            inputCognome.classList.remove('success')
        }

        if (inputEmail.value.includes('@') && 
            inputEmail.value.includes('.') &&
            (inputEmail.value.indexOf('@') < inputEmail.value.indexOf('.'))
        ) {
            inputEmail.classList.add('success')
            inputEmail.classList.remove('error')

        } else {
            inputEmail.classList.add('error')
            inputEmail.classList.remove('success')
        }

        if (inputPassword.value.length >= 10 &&
            inputPassword.value.length < 31 &&
            inputPassword.value.match(/\d/) &&
            inputPassword.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) 

        ) {
            inputPassword.classList.add('success')
            inputPassword.classList.remove('error')
        } else {
            inputPassword.classList.add('error')
            inputPassword.classList.remove('success')
        }

        if (inputConfermaPassword.value === inputPassword.value) {
            inputConfermaPassword.classList.add('success')
            inputConfermaPassword.classList.remove('error')
        } else {
            inputConfermaPassword.classList.add('error')
            inputConfermaPassword.classList.remove('success')
        }

    })
















})