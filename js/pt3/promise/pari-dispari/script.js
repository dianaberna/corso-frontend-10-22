/* esempio pari e dispari con Promise */

window.addEventListener("load", () => {
    for (let i = 0; i < 10; i++) {
        testAsincrono();
    }
})

const controlloPariDispari = () => {
    // genero un numero casuale (da 1 a 10)
    let numero = Math.round(Math.random() * 10 + 1);
    return new Promise((resolve, reject) => {
        // resolve e response sono a tutti gli effetti degli argomenti 
        // della funzione ma non sono delle semplcii variabili,
        // sono delle funzioni 
        // state: "pending"     result: undefined
        if (numero % 2 === 0) {
            // è andata a buon fine
            // state: "fullfilled"      result: "Resolved with: " + randInt
            resolve("Resolved with: " + numero);
        } else {
            // è andata male
            // state: "rejected"    result: "--- Rejected with: " + randInt
            reject("REJECTED with: " + numero);
        }
    });
};

/* 
è equivalente a scrivere 

const testFuncAsync = async () => {
    try {
        let result = await evenOddFunc();
        console.log("Promise resolved! " + result);
    } catch (errore) {
        console.log("Promise rejected! " + errore);
    }
};
*/

async function testAsincrono (){
    /*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
    
    try {
        // cicla ogni volta che non va a buon fine -> FALSO!!!
    }catch (){

    }finally{

    }
    */
    try {
        // prova ad eseguire la funzione -> 
        // rimane in attesa finché la promise non viene eseguita
        let result = await controlloPariDispari(); // o abbiamo una funzione con una promise al suo interno esplicita oppure una fetch (promise implicita)
        console.log("Promise resolved! " + result);   
    } catch (error) {
        // se c'è un errore lo cattura e lo stampo 
        console.log("Promise rejected! " + error);
    } finally {
        console.log("The end")
    }
} 


