// Realizzare una pagina web con js di una to-do-list. 

const body = document.querySelector("body");

let newMainDiv = document.createElement("div")
newMainDiv.style.display="flex";
newMainDiv.style.marginTop="1rem";

const newInput=document.createElement("input");
newInput.style.marginRight="0.5rem"
body.appendChild(newInput);
const newButt=document.createElement("button");
const newButtText = document.createTextNode("Aggiungi");
body.appendChild(newButt);
newButt.appendChild(newButtText)
let newDiv1= document.createElement("div")
{
  newDiv1.id="newDiv1"
newDiv1.style.display="flex";
newDiv1.style.flexDirection="column";
newDiv1.style.backgroundColor="pink";
  newDiv1.style.padding="1rem";
}
let newDiv2= document.createElement("div")
{
  newDiv2.id="newDiv2"
  newDiv2.style.display="flex";
  newDiv2.style.flexDirection="column";
  newDiv2.style.backgroundColor="lightblue";
  newDiv2.style.padding="1rem";
}
body.appendChild(newMainDiv);
newMainDiv.appendChild(newDiv1);
newMainDiv.appendChild(newDiv2);
let newUl1 = document.createElement("ul")
newUl1.id="ul1"
newDiv1.appendChild(newUl1);
let newUl2 = document.createElement("ul")
newDiv2.appendChild(newUl2);
newUl2.id="ul2"
let newDelButt = document.createElement("button");
let newDelButtText = document.createTextNode("Svuota cestino");
newDiv2.appendChild(newDelButt);
newDelButt.appendChild(newDelButtText)

newButt.addEventListener("click", function(){
  let newLi = document.createElement("li");
  newUl1.appendChild(newLi);
  let newLiText = document.createTextNode(newInput.value);
  newLi.appendChild(newLiText);
  let newTrashButt = document.createElement("button");
  let newTrashButtText = document.createTextNode("x");
  newLi.appendChild(newTrashButt);
  newTrashButt.style.marginLeft="0.5rem";
  newTrashButt.appendChild(newTrashButtText);
  newInput.value=""
  newTrashButt.addEventListener("click", function(){
    newUl2.appendChild(newLi)
    newTrashButt.remove()
    let newRestButt = document.createElement("button");
    let newRestButtText = document.createTextNode("Ripristina")
    newLi.appendChild(newRestButt)
    newRestButt.appendChild(newRestButtText)
    newRestButt.style.marginLeft="0.5rem";
    newRestButt.addEventListener("click", function(){
      newRestButt.remove()
      newUl1.appendChild(newLi)
      newLi.appendChild(newTrashButt);
    })
  })
  newDelButt.addEventListener("click", function(){
    if (newLi.parentNode.id=="ul2"){
      newUl2.removeChild(newLi)
    }
  })
})
