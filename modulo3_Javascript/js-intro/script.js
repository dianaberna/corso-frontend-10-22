mioArray = [-5, 8, 9, -1, -6];
i = 0;
sommaPosizionePari = 0;

while (i < mioArray.length) {
  console.log("l'indice è " + i);
  sommaPosizionePari = sommaPosizionePari + mioArray[i];
  console.log("la somma è " + sommaPosizionePari);
  i = i + 2;
}

// for (let i = 0; i < mioArray.length; i += 1); {
//   let sommaPosizionePari = sommaPosizionePari + mioArray[i];
//   console.log(sommaPosizionePari);
// }