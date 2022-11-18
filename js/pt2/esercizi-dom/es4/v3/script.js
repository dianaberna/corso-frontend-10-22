function printResult(input, error) {
    let str = input;
    str += " = ";
    if(!error) str += eval(input);
    else str += "errore!";
    let inputText = document.getElementById("inputText");
    inputText.value = str;
    let newResult = document.createElement("li");
    let valore = document.createTextNode(str);
    newResult.appendChild(valore);
    let tape = document.getElementById("tape");
    tape.appendChild(newResult);
    inputText.value = "";
}

window.addEventListener("load", function () {
    let result = false;
    let division = false;
    let divisionZero = false;
    let tape = document.createElement("ul");
    tape.id = "tape";
    let input = document.createElement("input");
    input.type = "text";
    input.id = "inputText";
    input.addEventListener("change", function () {
        printResult(input.value);
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
                    printResult(input.value, true);
                    input.value = "errore!";
                    divisionZero = false;
                    
                } else {
                    printResult(input.value);
                    //input.value = eval(input.value);
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
    document.body.appendChild(tape);
});
