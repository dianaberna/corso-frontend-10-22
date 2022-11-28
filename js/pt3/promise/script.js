/* esempio definizione Promise */
 
function provaPromise(i) {
    return new Promise((resolve, reject) => {
        if (i == 0) {
            resolve("Hai ragione, i = 0");
        } else {
            reject("Ci dispiace, i non è uguale a 0");
        }
    });
}

provaPromise(0)
    .then((response) => {
        //qui è stata risolta
        console.log(response);
    })
    .catch((error) => {
        //gestisci l'errore
        console.log(error);
    })
    .finally(() => {
        //alla fine della promessa
        console.log("Ho finito tutto");
    });

/* console.log("stampa= " +error); */
setTimeout(() => console.log("prova con ritardo"), 2000)
console.log("ciao") 

/* esempio pari e dispari con Promise */

const evenOddFunc = () => {
    let randInt = Math.round(Math.random() * 10 + 1);
    return new Promise((resolve, reject) => {
        if (randInt % 2 === 0) {
            resolve("Resolved with: " + randInt);
        } else {
            reject("--- Rejected with: " + randInt);
        }
    });
};

const testFuncAsync = async () => {
    try {
        let result = await evenOddFunc();
        console.log("Promise resolved! " + result);
    } catch (errore) {
        console.log("Promise rejected! " + errore);
    }
};

for (let i = 0; i < 10; i++) {
    testFuncAsync();
}