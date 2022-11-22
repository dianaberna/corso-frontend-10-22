/* esempio definizione Promise */

window.addEventListener("load", () => {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    // utilizziamo then...catch...finally come sintassi simile a try...catch...finally
    
    // switch -> then, catch = case      
    // finally = default (ma viene eseguito sempre)

    let mioNumero = 5
    provaPromise(mioNumero)
        .then((response) => {
            // è stata risolta la promise
            console.log("--- "+response+" ---");
        })
        .catch((error) => {
            // gestisco l'errore
            console.log(error);
        })
        .finally(() => {
            // alla fine della promessa comunque eseguo il finally
            console.log("Ho finito tutto");
        });
})

function provaPromise(i) {
    return new Promise((resolve, reject) => {
        if (i == 0) {
            resolve("Hai ragione, i = 0");
        } else {
            reject("Ci dispiace, i non è uguale a 0");
        }
    });
}











/* console.log("stampa= " +error); */
//setTimeout(() => console.log("prova con ritardo"), 2000)
//console.log("ciao") 

