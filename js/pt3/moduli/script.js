/**
 * I moduli JavaScript ti consentono di suddividere il codice in file separati.
 * Ciò semplifica la manutenzione della base di codice.
 * I moduli JavaScript si basano sulle istruzioni di importazione ed esportazione.
 */

import funzione1 from "./funzioni.js"; // funzione1 è stato esportata come default

import { funzione2, funzione3 } from "./funzioni2.js";

import { funzione2 as f2, funzione3 as f3 } from "./funzioni2.js";

import * as nuovoNome from "./funzioni2.js";

import funzione4, { funzione2 as f22, funzione3 as f33 } from "./funzioni2.js";

funzione1();

console.log("----");

funzione2();
funzione3();

console.log("----");

f2();
f3();

console.log("----");

// notazione ad oggetto
console.log(nuovoNome.funzione2)
nuovoNome.funzione2();
nuovoNome.funzione3();

console.log("----");

funzione4();
f22();
f33();

//funzione5()  -> qui non esiste perché non abbiamo fatto l'export di funzione5 nel file funzioni2