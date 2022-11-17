window.addEventListener("load", function () {
    document.getElementById("aggiungi").addEventListener("click", function () {
        
       
       let elemento=document.createElement("li")
       let text=document.getElementById("nuovoEl").value
       let testo= document.createTextNode(text)
        elemento.appendChild(testo)
        document.getElementById("lista").appendChild(elemento)

        let rimuovi=document.createElement("button")
        let textButton= document.createTextNode("X")
        rimuovi.appendChild(textButton)
        elemento.appendChild(rimuovi)
        rimuovi.style.marginLeft="10px"
        rimuovi.style.fontWeight="600"
        document.getElementById("nuovoEl").value=""

        rimuovi.addEventListener("click", function () {
            document.getElementById("lista").removeChild(elemento)
        })
        
    })

    
});
