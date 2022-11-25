/* ES 3
Realizzare una pagina web con js di una to-do-list. 
Una prima versione potrebbe essere quella di eliminare dal dom l’elemento al click della X, mentre una seconda versione potrebbe essere
quella di non rimuovere subito gli elementi ma lasciarli in una seconda lista da poter svuotare al click di un altro pulsante.

*/

window.addEventListener("load", function () {

    document.body.style.height="700px";
    //input
    let inserttext=document.createElement("input");
    document.body.appendChild(inserttext);
    //pulsante
    let aggiungi=document.createElement("button");
    document.body.appendChild(aggiungi);
    let aggiungitext=document.createTextNode("Aggiungi");
    aggiungi.appendChild(aggiungitext);
    //creo div per contenere lista
    let divlista=document.createElement("div");
    document.body.appendChild(divlista);
    divlista.style.margin="2rem"; 
    divlista.style.width= "400px";
    divlista.style.height= "400px";
    //creo lista
    let ul_lista=document.createElement("ul");
    divlista.appendChild(ul_lista)


aggiungi.addEventListener("click", function(){
//creo lista le cui voci sono = a ciò che scrivo nell'input
    console.log(inserttext.value)
    let quest=document.createElement("li")
    ul_lista.appendChild(quest)
    let questText=document.createTextNode(inserttext.value)
    quest.appendChild(questText)



    let DeleteButton=document.createElement("button")
    DeleteButton.style.height="1rem"
    DeleteButton.style.width="1rem"
    DeleteButton.value="x";
    let deletex=document.createTextNode("X")
    DeleteButton.appendChild(deletex)
    DeleteButton.addEventListener("click",function(){
    quest.remove()
    
}) 
quest.appendChild(DeleteButton)
})



















})