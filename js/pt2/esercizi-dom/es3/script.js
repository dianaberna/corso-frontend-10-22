console.log("es3");

function aggiungiTask() {
    let lista = document.getElementsByTagName("ul")[0];
    let inputTestuale = document.getElementById("inputTestuale");
    let nuovoTask = document.createElement("li");
    let testo = document.createTextNode(inputTestuale.value);
    let bottoneCancella = document.createElement("input");
    bottoneCancella.type = "button";
    bottoneCancella.value = "x";
    bottoneCancella.addEventListener("click", function () {
        nuovoTask.remove();
    });
    nuovoTask.appendChild(testo);
    nuovoTask.appendChild(bottoneCancella);
    lista.appendChild(nuovoTask);
    inputTestuale.value = "";
}

window.addEventListener("load", function(){
    let nuovoDiv = document.createElement("div")
    let inputTesuale = document.createElement("input")
    inputTesuale.id = "inputTestuale"
    let inputButton = document.createElement("input")
    inputButton.type = "button"
    inputButton.addEventListener("click", function(){
        aggiungiTask()
    })
    inputButton.value = "Aggiungi"
    let lista = document.createElement("ul")
    nuovoDiv.appendChild(inputTesuale)
    nuovoDiv.appendChild(inputButton)
    nuovoDiv.appendChild(lista)
    document.body.appendChild(nuovoDiv)
})
