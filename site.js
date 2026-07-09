// ===== DOM Selection =====

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");

// ===== Variables =====

let firstNumber = "";
let secondNumber = "";
let operator = "";
let isSecondNumber = false;


// ===== Number Buttons =====

numberButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (!isSecondNumber) {

            firstNumber += button.textContent;
            display.value = firstNumber;

        } else {

            secondNumber += button.textContent;
            display.value = secondNumber;

        }

    });

});


// ===== Operator Buttons =====

operatorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        if (firstNumber === "") return;

        operator = button.textContent;
        isSecondNumber = true;

    });

});


// ===== Equals =====

equalButton.addEventListener("click", () => {

    let result;

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    switch (operator) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "×":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            return;
    }

    display.value = result;

    // Reset for next calculation

    firstNumber = result.toString();
    secondNumber = "";
    operator = "";
    isSecondNumber = false;

});


// ===== Delete Button =====

deleteButton.addEventListener("click", () => {

    if (!isSecondNumber) {

        firstNumber = firstNumber.slice(0, -1);
        display.value = firstNumber;

    } else {

        secondNumber = secondNumber.slice(0, -1);
        display.value = secondNumber;

    }

});
