const calcBody = document.querySelector("#calcBody");
const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const operators = Array.from(document.querySelectorAll(".operator"));

let number1 = "";
let number2 = "";
let operator = "";

let currentNum = "";


generateCalc();

for (let x in operators) {
    operators[x].addEventListener("click", ()=> {
        number1 = currentNum;
        operator = operators[x].id;
        currentNum = "";
        display.textContent = "";
    });
}


clear.addEventListener("click", () => {
    currentNum = "";
    display.textContent = currentNum;
});

equal.addEventListener("click", () => {
    number2 = currentNum;
    currentNum = operate(number1, number2, operator);
    display.textContent = currentNum;
});

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
    return Number(num1) + Number(num2);
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
            display.textContent += button.id;
            currentNum += button.id;
        })
        calcBody.appendChild(button);
    }
}