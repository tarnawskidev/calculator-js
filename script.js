const calcBody = document.querySelector("#calcBody");

let number1 = "";
let number2 = "";
let operator = "";


generateCalc();

//function that performs operation on two numbers
function operate(num1, num2, operator) {
    switch(operator){
        case "add":
            return add(num1, num2);
        case "subtract":
            return subtract(num1, num2);
        case "multiply":
            return multiply(num1, num2);
        case "divide":
            return divide(num1, num2);
    }
}

//functions for math logic
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}


function generateCalc() {
    for (let i=9; i >-1; i--) {
        let button = document.createElement("div");
        button.id = i;
        button.textContent = i;
        button.className ="calcButton";
        button.addEventListener("click", () => {
            console.log(button.id)
        })
        calcBody.appendChild(button);
    }
}