window.addEventListener("load", function() {
    let pulsante = document.getElementById("button");
    pulsante.addEventListener("click", function() {
        console.log(inputText);
        let puntinoLi = document.createElement("li");

        lista.appendChild(puntinoLi);

        let questText = document.createTextNode(inputText.value);
        puntinoLi.appendChild(questText);

        let deleteButton = document.createElement("button");
        let deletButtonText = document.createTextNode("X");

        deleteButton.appendChild(deletButtonText);
        deleteButton.addEventListener("click", function() {
            puntinoLi.remove();
        });
        puntinoLi.appendChild(deleteButton);
    });

    let inputText = document.getElementById("inputText");
    let divLista = document.getElementById("divLista");
    let lista = document.getElementById("ul");
});