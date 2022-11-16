window.addEventListener("load", function (e) { // load = dopo la fine caricamento 
    // e è un argomento popolato dal browser con i dati dell'evento 
    console.log(e)

    // primo esempio
    let mioBottone = document.getElementById("nuovoBottone");
    mioBottone.addEventListener("click", hoCliccatoIlBottoneNuovo)

    // secondo esempio
    const selectElement = document.getElementById('gelato');
    selectElement.addEventListener('change', function(event) {
        console.log(event.target.value)
        const result = document.querySelector('.result');
        result.innerHTML = `Hai selezionato ${event.target.value}`;
    });

    // terzo esempio
    let mioDato = 0
    document.getElementById("stampaQui").innerHTML = mioDato
    
    let inputTestuale = document.getElementById("mioInput")
    inputTestuale.addEventListener('change', function(e){

        console.log(e)
        console.log(e.target)
        console.log(e.target.value)

        mioDato = e.target.value
        document.getElementById("stampaQui").innerHTML = mioDato
    })

    let mioPulsante = document.getElementById("mioPulsante")
    mioPulsante.addEventListener("click", function(){
        mioDato = Number(mioDato) + 2
        document.getElementById("stampaQui").innerHTML = mioDato
    })
}) 


function hoCliccatoIlBottone() {
    console.log("il bottone è stato cliccato")
}

function hoCliccatoIlBottoneNuovo() {
    console.log("il NUOVO bottone è stato cliccato")
}




/*

 funzione() --> richimando 
 funzione -> stiamo comunicando il nome della nostra funzione 

*/