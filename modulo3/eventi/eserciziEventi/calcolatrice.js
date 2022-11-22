window.addEventListener('load', function() {

    const body = document.body

    function creaElementi({tipo, posizione, contenuto, value, stile, attributi, id, classe}) {
        let nuovoElemento = document.createElement(tipo);
        if (contenuto) {
            let contenutoElemento = document.createTextNode(contenuto)
            nuovoElemento.appendChild(contenutoElemento)
        }
        if (classe) {
            nuovoElemento.classList = classe
        }
        posizione.appendChild(nuovoElemento);
        if (attributi) {
        }
        if (id) {
            nuovoElemento.setAttribute('id', id)
        }
        if (value) {
            nuovoElemento.value = value
        }

        return nuovoElemento
    }

    let tabella = [
        7, 8, 9, '/',
        4, 5, 6, '*',
        1, 2, 3, '-',
        '0', '.', '=', '+'
    ]


    let inputTesto = creaElementi({tipo:'input', posizione: body})
    inputTesto.setAttribute('style', 'display: block; padding: 1rem; width: 260px; margin: auto')

    let divContenitore = creaElementi({tipo: 'div', posizione: body})
    divContenitore.setAttribute('style', 'display: flex; flex-wrap: wrap; width: 260px; margin: 1rem auto')

    let risultato = '';

    for (let i=0; i < tabella.length; i++) {
        let elementi = creaElementi({classe: 'numOp', tipo: 'input', posizione: divContenitore, value: tabella[i], id: tabella[i]})
        elementi.setAttribute('style', 'display: inline; border-radius: 10px; width: 20px; margin: 0.5rem; padding: 0.5rem; background-color: black; color: white; flex: 1;')

        if (elementi.value == '/' || 
            elementi.value == '*' ||
            elementi.value == '+' ||
            elementi.value == '-' ||
            elementi.value == '.' ||
            elementi.value == '=' 
            ) {
            elementi.style.backgroundColor = 'blue'
        }

        elementi.addEventListener('click', (e) => {

            let numero = e.target.value;

            if (e.target.value != '=') {
                risultato += numero 
                inputTesto.value = risultato
            } 

            console.log(risultato);
        })

    };

    // TRAMITE TASTIERA
    inputTesto.addEventListener('change', () => {
        risultato = inputTesto.value
    })

    const calcola = document.getElementById('=')

    let risultatoFinale

    function funzioneCalcola() {

        if (risultato.includes(':')) {
            let modificaDiviso = risultato.replace(':', '/');
            risultatoFinale = eval(modificaDiviso);
        } else {
            risultatoFinale = eval(risultato);
        }

        inputTesto.value = risultatoFinale
        console.log(risultatoFinale);
        risultato = '';

        return risultatoFinale
    }

    calcola.addEventListener('click', funzioneCalcola)

    inputTesto.addEventListener("keypress", function(event) {

        // non so perchè era separato quindi lo riscrivo
        risultato = inputTesto.value

        if (event.key === "Enter") {
            alert('funziona?')
            funzioneCalcola()
        }
    });

})