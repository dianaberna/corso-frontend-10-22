animali = ["gatto", "cane", "coniglio", "topo", "ape"];
// let animali = ["gatto", "criceto", "cane", "coniglio", "topo", "ape", "gatto", "cane", "coniglio", "topo", "ape"];
// stringhe =
console.log(animali)
console.log(animali.length)
console.log(animali[0])
console.log(animali[0].length)
console.log(animali[0][3])

// aggiungere in un nuovo array solo le parole/stringhe 
// di 4 caratteri -> ["cane", "topo"]
// requisito --> animali[i].length == 4


indice = 0; 

// contare quante parole di 4 caratteri ci sono nel nostro array
/*

indice = 0) gatto
indice = 1) cane -
indice = 2) coniglio
indice = 3) topo - 

risultato = 2
*/
let conteggio = 0
while(indice < animali.length){
    if(animali[indice].length == 4){
        conteggio = conteggio + 1
        console.log(conteggio)
        console.log(animali[indice])
    }
    
    indice = indice + 1; 
}
console.log("---")
/*

indice = 0) gatto
indice = 1) cane -
indice = 2) coniglio
indice = 3) topo - 

0) cane
1) topo

*/
let arraynuovo = []
indice = 0;
let contatore = 0
while(indice < animali.length){
    if(animali[indice].length == 4){
        console.log(animali[indice])
        console.log(contatore)
        arraynuovo[contatore] = animali[indice]
        contatore = contatore + 1
        // conteggio = 0 + 1 = 1
        // conteggio = 1 + 1 = 2 
    }
    indice = indice + 1; // indice++;
}
console.log("---")
console.log(arraynuovo)