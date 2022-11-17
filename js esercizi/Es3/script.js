
function creaTask(){
    if(document.querySelector(".container input").value != ""){
        let lista = document.createElement("li");
        document.querySelector("ol").appendChild(lista);
        let task = document.createElement("p");
        let taskTesto = document.createTextNode(document.querySelector(".container input").value);
        task.appendChild(taskTesto);
        lista.appendChild(task);

        let button = document.createElement("button");
        let buttonTesto = document.createTextNode("x");
        button.appendChild(buttonTesto); 
        lista.appendChild(button);
        button.className = "remove";
        button.setAttribute("onclick","removeTask()");
    }else{
        alert("devi inserire una titolo")
    }
    

}

function removeTask(){
    let remove = document.querySelector(".remove");
    remove.parentNode.remove();
}