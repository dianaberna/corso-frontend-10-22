
window.addEventListener("load", function(){
    
    let pulsante = document.getElementById("mioBottone")
    // pulsante.addEventListener("click", stampaBottone(e)) 
    pulsante.addEventListener("click", (e) => stampaBottone(e)) 
    // (e) => stampaBottone(e) il nome della funzione è stampaBottone però eseguila quando ti serve, cioè quando avviene l'evento del click
    let pulsante2 = document.getElementById("mioBottone2")
    pulsante2.addEventListener("click", (e) => stampaBottone(e))
    
    /* window.addEventListener("click", function(e){
        console.log("ho cliccato la pagina")
    }) */
    
    let risultato 
    
    for(let i=0; i<3; i++){
        let nuovoPulsante = document.createElement("input")
        nuovoPulsante.type = "button"
        nuovoPulsante.value = i
        nuovoPulsante.addEventListener("click", function(){
            console.log("hai cliccato il pulsante "+i)
            risultato = i
        })
        document.body.appendChild(nuovoPulsante)
    }

})

function stampaBottone(evento){
    console.log(evento.target.id)
    let input = document.getElementById("inputTestuale")
    let stampa = document.getElementById("stampaQui")
    stampa.innerHTML = input.value 
    console.log("ho cliccato il pulsante ")
}
