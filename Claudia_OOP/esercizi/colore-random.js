// OK, però c'è uno switch di colori ad ogni reload. 

window.addEventListener("load", function (e) {
  console.log(e);
  // Bisogna assegnare un current color da cui partire la prima volta?
  // let bgCol = document.body.style.getPropertyValue("background-color");
  let bgCol = "";

  function colRandom() {
    for (i = 0; i < 3; i++) {
      num = Math.round(Math.random() * 255 + 1);
      if (i > 0) {
        bgCol += ", ";
      }; bgCol += num;
      // console.log(num);
    }; console.log(bgCol);
  };

  document.getElementById("colore-random").innerHTML = bgCol;
  colRandom();
  // console.log(colRandom);

  document.body.style.backgroundColor = `rgb(${bgCol})`;
  let colore_h1 = document.createTextNode(`rgb(${bgCol})`);
  let el_h1 = document.getElementById("colore-random");
  el_h1.appendChild(colore_h1);
  // console.log(colore_h1);
});