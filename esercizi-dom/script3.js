
    window.addEventListener("load", function(){
    let pulsante = document.getElementById("button")
    pulsante.addEventListener("click", function(){
        console.log(inputText.value)
        let quest = document.createElement("li")
        lista.appendChild(quest)
        let questText = document.createTextNode(inputText.value)
        quest.appendChild(questText)
        inputText.value=""
       
        let deleteButton = document.createElement("button")
        deleteButton.className="deleteButton"
        let deleteButtonText = document.createTextNode("X")
        deleteButton.appendChild(deleteButtonText)
        deleteButton.addEventListener("click", function(){
            quest.remove()
        })
        quest.appendChild(deleteButton)

    })

    let inputText = document.getElementById("inputText")
    let lista = document.getElementById("ul")
    let divLista = document.getElementById("divLista")
})

// Prendi l'input-bottone

// Aggiungi evento click al bottone