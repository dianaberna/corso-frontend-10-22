let card = document.createElement("div");
card.className = "card";
document.body.appendChild(card);

let cardbody = document.createElement("div");
cardbody.className = "card-body";
card.appendChild(cardbody);

let img = document.createElement("img");
img.src = "caffe.jpg";
img.alt = "caffe";
cardbody.appendChild(img);

let testo = document.createElement("div");

let titolo = document.createElement("div");
let testotitolo = document.createTextNode("Vanilla Latte");
titolo.appendChild(testotitolo);
testo.appendChild(titolo);

cardbody.appendChild(testo);
