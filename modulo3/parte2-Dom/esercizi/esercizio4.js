//Realizzare una pagina web con js di una calcolatrice.
const body = document.querySelector("body");
let calcString = ""
let newMainDiv = document.createElement("div")
{ // newMainDiv styles
  newMainDiv.style.margin="1rem"
  newMainDiv.style.display="flex"
  newMainDiv.style.flexDirection="column"
  newMainDiv.style.width="200px"
}
body.appendChild(newMainDiv);
newInput = document.createElement("input")
{ // newInput styles
  newInput.type="text"
  newInput.placeholder="_"
  newInput.style.textAlign="right"
  newInput.style.width="158px"
  newInput.style.height="2rem"
  newInput.style.margin="0.25rem"
  newInput.style.padding="0 1rem"
  newInput.style.border="1px solid lightgray"
}
newMainDiv.appendChild(newInput);
let newDiv1 = document.createElement("div")
{ // newDiv1 styles
  newDiv1.style.display="grid"
  newDiv1.style.gridTemplateColumns="1fr 1fr 1fr 1fr"
}
newMainDiv.appendChild(newDiv1);
let newDiv2 = document.createElement("div")
newMainDiv.appendChild(newDiv2);
let newButt
let newButtText
buttArray = [7,8,9,"/",4,5,6,"*",1,2,3,"-",0,".","=","+"];
for (let index = 0; index < buttArray.length; index++) {
  newButt = document.createElement("button");
  { // newButt styles
    newButt.type="button"
    newButt.style.margin="0.25rem"
    newButt.style.border="none"
    newButt.style.height="2rem"
    newButt.style.borderRadius="0.5rem"
    newButt.style.cursor="pointer"
  }
  newDiv1.appendChild(newButt)
  newButtText = document.createTextNode(buttArray[index]);
  newButt.appendChild(newButtText);
  if ((index+1)%4 == 0) { // newButt styles - variano in base alla posizione
    newButt.style.backgroundColor="lightgray"
  } else{
    if (index == 14) {
      newButt.style.backgroundColor="lightblue"
      newButt.type="submit"
    } else {
      newButt.style.backgroundColor="rgb(230,230,230)"
    }
  }
  newButt.addEventListener("click", function(){
    //console.log(event.clicked[index])
    clicked = buttArray[index]
    if (clicked == "=") {
      if (newInput.value=="") {
      } else {
        let newParagraph = document.createElement("p")
        newDiv2.insertBefore(newParagraph, (document.querySelector("p"))) // per inserire l'ultima operazione più in alto nella cronoologià
        result = eval(newInput.value)
        let newParagraphText = document.createTextNode(newInput.value+" = "+result)
        newParagraph.appendChild(newParagraphText)
        newInput.value = result
        calcString = result
      }
    } else {
      calcString = calcString + clicked
      newInput.value = calcString
    }
    (document.querySelectorAll("p")[10]) ? (document.querySelectorAll("p")[10]).remove():null //mi serve per mantenere la lista delle operazioni non più lunga di 10 records
  })
}
window.addEventListener("keypress", function(event){
  console.log(event.key)
  clicked=event.key
  if (event.key === "Enter") {
    if (newInput.value=="") {
    } else {
      let newParagraph = document.createElement("p")
      newDiv2.insertBefore(newParagraph, (document.querySelector("p"))) // per inserire l'ultima operazione più in alto nella cronoologià
      result = eval(newInput.value)
      let newParagraphText = document.createTextNode(newInput.value+" = "+result)
      newParagraph.appendChild(newParagraphText)
      newInput.value = result
      calcString = result
    }
  }
  else {
    if (event.key === "Delete") {
      calcString = newInput.value = ""
    } else {
      calcString = calcString + clicked
      newInput.value = calcString
    }
  }
  (document.querySelectorAll("p")[10]) ? (document.querySelectorAll("p")[10]).remove():null //mi serve per mantenere la lista delle operazioni non più lunga di 10 records
})