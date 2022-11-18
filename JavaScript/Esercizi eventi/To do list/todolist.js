//PRIMA VERSIONE

let pulsante = document.getElementById("button");
let uList = document.getElementById("ul");

function toDoList() {
    let textInput = document.getElementById("input");
    //  console.log(textInput.value);
    //console.log(textInput.value);
    let listElement = document.createElement("li");
    let listElementText = document.createTextNode(textInput.value);
    listElement.appendChild(listElementText);
    listElementText.innerHTML = textInput.value;
    uList.appendChild(listElement);
    //let buttonX = creaNodo("button", "buttonx", "X");
    const buttonX = document.createElement("button");
    buttonX.id = "buttonx";
    const buttonXText = document.createTextNode("X");
    buttonX.appendChild(buttonXText);

    listElement.appendChild(buttonX);
    //console.log(textInput.value);
    function eraseToDo() {
        uList.removeChild(listElement);
    }
    buttonX.addEventListener("click", eraseToDo);
}

pulsante.addEventListener("click", toDoList);

// SECONDA VERSIONE

/* let pulsante = document.getElementById("button");
let uList = document.getElementById("ul");
let uList2 = document.getElementById("ul2");
let uList3 = document.getElementById("ul3");

function toDoList() {
    let textInput = document.getElementById("input");
    //  console.log(textInput.value);
    //console.log(textInput.value);
    let listElement = document.createElement("li");
    let listElementText = document.createTextNode(textInput.value);
    listElement.appendChild(listElementText);
    listElementText.innerHTML = textInput.value;
    uList.appendChild(listElement);
    //let buttonX = creaNodo("button", "buttonx", "X");
    let buttonX = document.createElement("button");
    buttonX.id = "buttonx";
    let buttonXText = document.createTextNode("X");
    buttonX.appendChild(buttonXText);

    listElement.appendChild(buttonX);
    //console.log(textInput.value);

    function spostaElemento() {
        function creaPulsante() {
            let buttonXAll = document.createElement("button");
            buttonXAll.id = "button-x-all";
            let buttonXAllText = document.createTextNode("Elimina tutto"); // SISTEMARE QUA CHE ESCONO TROPPI PULSANTI
            buttonXAll.appendChild(buttonXAllText);
            uList3.appendChild(buttonXAll);
        }
        let buttonXAll = creaPulsante();
        uList.removeChild(listElement);
        uList2.appendChild(listElement);
        listElement.removeChild(buttonX);

    }
    
    function eraseAll() {
        uList2.remove(listElement);
    }

    function eraseToDo() {
        uList.removeChild(listElement);
    }
    buttonX.addEventListener("click", spostaElemento);
}

pulsante.addEventListener("click", toDoList);
 */
