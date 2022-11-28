

function stringWithoutNumber(stringa) {
    for (let j = 0; j <= 9; j++) {
        let check = stringa.includes(j);
        if (check) {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
    return email.indexOf("@") < 1 ||
        email.indexOf(".") < 0 ||
        email.indexOf("@") > email.lastIndexOf(".")
        ? false
        : true;
}

function checkSpecialChar(stringa) {
    let caratteriParticolari = ["!", "*", "?", "#"];
    for (let i = 0; i < caratteriParticolari.length; i++) {
        if (stringa.includes(caratteriParticolari[i])) return true;
    }
    return false;
}

function validatePassword(password) {
    // almeno 10 caratteri, massimo 30 caratteri, almeno un numero, almeno un carattere tra ! * ? #
    // console.log(password.length >= 10 ,password.length <= 30, !validaStringa(password), checkCaratteri(password) )
    
    /* 
    if(password.length >= 10 &&
        password.length <= 30 &&
        !stringWithoutNumber(password) &&
        checkSpecialChar(password)){
        return true;
    }else{
        return false;
    } 
    */

    return (password.length >= 10 &&
        password.length <= 30 &&
        !stringWithoutNumber(password) &&
        checkSpecialChar(password))
        ? true
        : false; 

    // (condizione) ? ramo true : ramo false -> operatore ternario 

    // password.length >= 10 --> true
    // password.length <= 30 --> true
    // stringWithoutNumber(password) -> nego questo (true se password non contiene numeri) -> true se password contiene numeri
    // noi vogliamo true se la passoword contiene numeri 
    // checkSpecialChar(password) --> true (se trova uno di questi caratteri)
}

function checkPassword(password) {
    let vecchiaPassword = document.getElementById("password").value;
    return password === vecchiaPassword ? true : false;
}

function isEmpty(stringa) {
    return stringa == "" ? true : false;
}

window.addEventListener("load", function () {
    let mioForm = document.getElementById("mioForm");

    // pulsante "occhietto" mostra/nascondi password --> da finire!!
    let buttonPassword = document.getElementById("mostraPassword")
    buttonPassword.addEventListener("click", function(){
        let inputPassword = document.getElementById("password")
        if(inputPassword.type == "password"){
            inputPassword.type="text"
        }else{
            inputPassword.type="password"
        }
        
        console.log("sono in mostrapassword")
        console.log(inputPassword.value)
    })

    mioForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = mioForm.elements["nome"]; // nome -> è il name nell'input
        //let nome = document.getElementById("nome");
        let cognome = mioForm.elements["cognome"];
        let email = mioForm.elements["email"];
        let password = mioForm.elements["password"];
        let confermaPassword = mioForm.elements["confermaPassword"];

        nome.className =
            stringWithoutNumber(nome.value) && !isEmpty(nome.value)
                ? "ok"
                : "error";

        /* 
        if( stringWithoutNumber(nome.value) && !isEmpty(nome.value) ){
            nome.className = "ok"
        }else{
            nome.className = "error"
        } 
        */

        cognome.className =
            stringWithoutNumber(cognome.value) && !isEmpty(cognome.value)
                ? "ok"
                : "error";

        // stringWithoutNumber -> true
        // isEmpty -> true = la stringa è "" -> per far attivare stringWithoutNumber devo avere isEmpty a false

        email.className =
            validateEmail(email.value) && !isEmpty(email.password)
                ? "ok"
                : "error";

        password.className =
            validatePassword(password.value) && !isEmpty(password.value)
                ? "ok"
                : "error";

        confermaPassword.className =
            checkPassword(confermaPassword.value) &&
            !isEmpty(confermaPassword.value)
                ? "ok"
                : "error";
    });
});
