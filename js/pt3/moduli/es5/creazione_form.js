import * as funcValidation from "./funzioni_validazione.js";

function crea_form() {
    let mioForm = document.getElementById("mioForm");
    mioForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let nome = mioForm.elements["nome"];
        let cognome = mioForm.elements["cognome"];
        let email = mioForm.elements["email"];
        let password = mioForm.elements["password"];
        let confermaPassword = mioForm.elements["confermaPassword"];

        nome.className =
            funcValidation.stringWithoutNumber(nome.value) &&
            !funcValidation.isEmpty(nome.value)
                ? "ok"
                : "error";

        cognome.className =
            funcValidation.stringWithoutNumber(cognome.value) &&
            !funcValidation.isEmpty(cognome.value)
                ? "ok"
                : "error";

        email.className =
            funcValidation.validateEmail(email.value) &&
            !funcValidation.isEmpty(email.password)
                ? "ok"
                : "error";

        password.className =
            funcValidation.validatePassword(password.value) &&
            !funcValidation.isEmpty(password.value)
                ? "ok"
                : "error";

        confermaPassword.className =
            funcValidation.checkPassword(confermaPassword.value) &&
            !funcValidation.isEmpty(confermaPassword.value)
                ? "ok"
                : "error";
    });
}

export default crea_form;
