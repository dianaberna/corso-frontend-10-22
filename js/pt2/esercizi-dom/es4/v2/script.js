window.addEventListener("load", function () {
    let result = false;
    let division = false;
    let divisionZero = false;
    let input = document.createElement("input");
    input.type = "text";
    input.addEventListener("change", function () {
        if (input.value != "") {
            input.value = eval(input.value);
        }
    });
    document.body.appendChild(input);

    let divCalculator = document.createElement("div");
    divCalculator.id = "calculator";

    let arrayCalculator = [
        7,
        8,
        9,
        "/",
        4,
        5,
        6,
        "*",
        1,
        2,
        3,
        "-",
        0,
        ".",
        "=",
        "+",
    ];
    for (let i = 0; i < arrayCalculator.length; i++) {
        let newButton = document.createElement("button");
        newButton.textContent = arrayCalculator[i];
        newButton.value = arrayCalculator[i];
        
        if (arrayCalculator[i] == "=") {
            newButton.className = "blue";
        }
        if (i == 3 || i == 7 || i == 11 || i == 15) {
            newButton.className = "gray";
        }
        newButton.addEventListener("click", function (e) {
            if (division == true && e.target.value === "0") {
                divisionZero = true;
            }

            if (e.target.value == "/") {
                division = true;
            } else {
                division = false;
            }

            if (e.target.value == "=") {
                if (divisionZero == true) {
                    // sono nel numero subito dopo aver cliccato /
                    input.value = "Errore!";
                    divisionZero = false;
                } else {
                    input.value = eval(input.value);
                }

                result = true;
            } else {
                if (result == true) {
                    input.value = "";
                    result = false;
                }
                if (input.value != "errore!")
                    input.value = input.value + e.target.value;
                else input.value = e.target.value;
            }
        });
        divCalculator.appendChild(newButton);
    }

    document.body.appendChild(divCalculator);
});
