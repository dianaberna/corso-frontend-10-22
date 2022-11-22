window.addEventListener("load", function(e) {
    let mioDato = 0;
    document.getElementById("stampaQui").innerHTML = mioDato;

    let inputTestuale = document.getElementById("mioInput");
    inputTestuale.addEventListener("change", function(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

        mioDato = e.target.value;
        document.getElementById("stampaQui").innerHTML = mioDato;
    });

    let mioPulsante = document.getElementById("mioPulsante");
    mioPulsante.addEventListener("click", function() {
        mioDato = Number(mioDato) + 2;
        document.getElementById("stampaQui").innerHTML = mioDato;
    });
});