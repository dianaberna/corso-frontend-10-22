/*ES 2
Realizzare una pagina web con js in cui inserire un input testuale dove il testo inserito rappresenta le regole css da applicare ad un div sottostante
PS. il div parte con un css base per renderlo visibile
(margin: 2rem; width: 400px; height: 400px; background-color: yellow)
*/

    

window.addEventListener("load", function () {

    document.body.style.height="700px";
    let inserttext=document.createElement("input");
    document.body.appendChild(inserttext);
    let text=document.createTextNode("margin: 2rem; width: 400px; height: 400px; background-color: yellow");
    inserttext.appendChild(text);
    let aggiungi=document.createElement("button");
    document.body.appendChild(aggiungi);
    let aggiungitext=document.createTextNode("Aggiungi");
    aggiungi.appendChild(aggiungitext);
    let div1=document.createElement("div");
    document.body.appendChild(div1);
    div1.style.margin="2rem"; 
    div1.style.width= "400px";
    div1.style.height= "400px";
    div1.style.backgroundColor= "yellow";
inserttext.value="margin: 2rem; width: 400px; height: 400px; background-color: yellow";

    aggiungi.addEventListener("click", function(){

        console.log(inserttext.value)
        div1.style=inserttext.value
        
        
        
    })

    
    
    
    
    
    
    
    
    
})