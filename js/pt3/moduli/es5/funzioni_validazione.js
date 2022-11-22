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
    return (password.length >= 10 &&
        password.length <= 30 &&
        !stringWithoutNumber(password) &&
        checkSpecialChar(password))
        ? true
        : false; 
}

function checkPassword(password) {
    let vecchiaPassword = document.getElementById("password").value;
    return password === vecchiaPassword ? true : false;
}

function isEmpty(stringa) {
    return stringa == "" ? true : false;
}

export {stringWithoutNumber, validateEmail, validatePassword, checkPassword, isEmpty}