const body = document.querySelector("body");
body.style.display="flex";

let newDiv1= document.createElement("div")
newDiv1.id="newDiv1"
newDiv1.style.display="flex";
newDiv1.style.flexDirection="column";
newDiv1.style.backgroundColor="red";
newDiv1.style.padding="1rem";
let newDiv2= document.createElement("div")
newDiv2.id="newDiv2"
newDiv2.style.display="flex";
newDiv2.style.flexDirection="column";
newDiv2.style.backgroundColor="blue";
newDiv2.style.padding="1rem";
body.appendChild(newDiv1)
body.appendChild(newDiv2)

let x
for (let index = 0; index < 10; index++) {
  newButt=document.createElement("button")
  newButt.id=index
  newButt.style.margin="0.5rem";
  newButt.innerHTML = "Pulsante "+(index+1);
  newDiv1.appendChild(newButt);
  newButt.onclick = function (){
    x=this.id
    if(document.getElementById(x).parentNode.id=="newDiv1"){
      newDiv2.appendChild(document.getElementById(x));
    }
    else{
      document.getElementById(x).remove();
    }
  }
}