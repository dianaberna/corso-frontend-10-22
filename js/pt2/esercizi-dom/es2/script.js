console.log("es2");

function aggiornaStile() {
    let div = document.getElementById("modifica");
    let input = document.getElementsByTagName("input")[0];
    div.style = input.value;
}

window.addEventListener("load", function () {
    // fase creazione dom -> input testuale + bottone + div 
    let inputTestuale = document.createElement("input");
    document.body.appendChild(inputTestuale)
    let pulsante = document.createElement("button")
    pulsante.textContent = "Aggiorna stile"
    pulsante.addEventListener("click", aggiornaStile)
    document.body.appendChild(pulsante)
    let div = document.createElement("div")
    div.id = "modifica"
    document.body.appendChild(div)

    let stileInziale =
        "margin: 2rem; width: 400px; height: 400px; background-color: yellow";
    inputTestuale.value = stileInziale;
    aggiornaStile(); 
});
