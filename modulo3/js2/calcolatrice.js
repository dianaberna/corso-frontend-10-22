window.addEventListener("load", function() {
    // creare il contenitore
    // creare l input
    // creare il l uguale
    // dare un valore all uguale
    //usare l egual
    let inputType = document.createElement("input");
    inputType.className = "inputCalc";
    inputType.type = "text";

    let divCalc = document.createElement("div");
    divCalc.className = "calc";
    document.body.appendChild(divCalc);
    divCalc.appendChild(inputType);

    let array = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "+",
        "-",
        "/",
        "*",
    ];
    let risultato;

    for (let i = 0; i < array.length; i++) {
        let nuoviPulsante = document.createElement("input");
        nuoviPulsante.type = "button";
        nuoviPulsante.value = array[i];
        nuoviPulsante.className = "pulsanti";
        nuoviPulsante.addEventListener("click", function() {
            console.log("hai cliccato il pulsante " + i);
            risultato = array[i];
        });
        divCalc.appendChild(nuoviPulsante);
    }
    let operatore;

    // let pulsantePiù = document.createElement("input");
    // pulsantePiù.type = "button";
    // pulsantePiù.value = "+";
    // pulsantePiù.addEventListener("click", function() {
    //     console.log("ho cliccato il +");
    // });
    // document.body.appendChild(pulsantePiù);
});