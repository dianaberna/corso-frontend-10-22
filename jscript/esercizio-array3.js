/* let array1 = [ 1, 2, 2, 3, 4]
let array2 = [4, 2, 2, 4]
let array3 = []
i=0
indice3=0

while (i<array1.length || i<array2.length) {
    if (array1[i]%2===1) {
        array3[indice3] = array1[i]
        console.log("PROVA DENTRO L'IF = " + array3)
        indice3++
    }

    if (array2[i]%2===0) {
        array3[indice3] = array2[i]
        console.log("PROVA DENTRO L'IF = " + array3)
        indice3++
    }

i++
}
console.log(array3) */

/* Crea una funzione che accetta due numeri come argomenti e ne restituisce la moltiplicazione.

Esempi:
moltiplicazione(3, 2) ➞ 6
moltiplicazione(-3, -6) ➞ 18
moltiplicazione(7, 3) ➞ 21
 */

function moltiplicazione (primonumero, secondonumero) {
return primonumero * secondonumero; }
console.log(moltiplicazione(2,3))

