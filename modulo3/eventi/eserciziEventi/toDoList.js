window.addEventListener('load', () => {

    const body = document.body;
    
    // creo input e button
    const input = document.createElement('input')
    body.appendChild(input)
    const button = document.createElement('button')
    const testoButton = document.createTextNode('aggiungi')
    button.appendChild(testoButton)
    body.appendChild(button)
    
    // creo ul dove inserirò gli impegni
    const lista = document.createElement('ul');
    console.log(lista);
    body.appendChild(lista)

    // funzione che crea impegno
    const creaImpegno = function() {
        const testoDigitato = input.value
        console.log(testoDigitato);


        if (testoDigitato != '') {
            // creo un <li> per ogni impegno nuovo e gli inserisco come testo il value digitato nell'input
            const impegnoNuovo = document.createElement('li');
            const descrizioneImpegno = document.createTextNode(testoDigitato)
            impegnoNuovo.appendChild(descrizioneImpegno)
            lista.appendChild(impegnoNuovo);
            impegnoNuovo.style.margin = '1rem 0'

            const buttonElimina = document.createElement('button');
            const testoButton = document.createTextNode('X')
            buttonElimina.appendChild(testoButton)
            impegnoNuovo.appendChild(buttonElimina)
            buttonElimina.style.marginLeft = '1rem'

            // cancello il testo dentro l'input
            input.value = ''


            buttonElimina.addEventListener('click', function() {
                impegnoNuovo.remove();
            })


            // se voglio, ma non conviene, farlo separatamente
            // buttonElimina.addEventListener('click', eliminaImpegno)
            return buttonElimina
        }
  
    }

    // const eliminaImpegno = function(e) {
    //     // e.target.remove();
    //     e.target.parentElement.remove();
    // }


    button.addEventListener('click', creaImpegno)

})
