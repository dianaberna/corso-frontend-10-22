window.addEventListener("load", function(e) {
    // devo inserire l'input con value  con regole css
    // collegare l'input al div sottostante
    // div parte con le regole di css
    // modifico value del input
    // con il click del bottone applico il nuovo value al qudarato

    let nuovoDiv = document.createElement("div");
    nuovoDiv.id = "square";
    document.body.appendChild(nuovoDiv);
    // console.log(cssEsistente);

    let buttonClick = document.getElementById("button");
    buttonClick.addEventListener("click", function(e) {
        let stampa = document.getElementById("initial_text");
        // let cssNuovo = document.getElementById("square").style;
        nuovoDiv.style = stampa.value;
    });
});