
function changeColor(){
    let n = [];
    for(let i=0; i<3; i++){
      n[i] = Math.floor(Math.random()*255);
    }
    let newColor = "rgb("+n[0]+", "+n[1]+", "+n[2]+")";
    document.body.style.backgroundColor = newColor;
    document.getElementById("color").innerHTML = newColor;
  }
  
  window.addEventListener("load", changeColor);
