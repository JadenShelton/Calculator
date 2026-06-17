let operator = '';
let number = '';
let numbers = [];


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b === 0) {
        return "Can't Divide by 0";
    }
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.error(`${operator} is invalid as an operator!`);
    }
}

const operatorRow = document.getElementById('operatorRow');
operatorRow.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {

        pushNumber();

        if (numbers.length === 2 && operator !== '') {
            calculate();
        }

        const operation = event.target.id;
        switch (operation) {
            case 'add':
                operator = '+';
                break;
            case 'subtract':
                operator = '-';
                break;
            case 'multiply':
                operator = '*';
                break;
            case 'divide':
                operator = '/';
                break;
            default:
                operator = '';
        }
    }
    console.log("Current operator:", operator);
});

const numRows = document.getElementsByClassName("numRow");
for(let i = 0; i < numRows.length; ++i) {
    numRows[i].addEventListener('click', (event) => {
        if(event.target.tagName === 'BUTTON') {
            number += event.target.textContent;
            console.log("Current typing string", number);
            document.getElementById("output").textContent = number;
        }
    });
}

const calc = document.getElementById('calc');
calc.addEventListener('click', () => {
    
    pushNumber();

    if (numbers.length === 2 && operator !== '') {
        calculate();
        operator = '';
    }
});

function calculate () {
    let b = numbers.pop();
    let a = numbers.pop();
    const result = operate(operator, a, b);

    document.getElementById("output").textContent = result;
    console.log(result);
    
    numbers.push(result);
    console.table(numbers);
}

function pushNumber() {
    // If numbers has a leftover result with no operator pending,
    // it's stale — the user is starting a new calculation.
    if(number !== '') {
        if(numbers.length === 1 && operator === '') {
            numbers = [];
        }
        numbers.push(Number(number));
        number = '';
    }
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {
    operator = '';
    number = '';
    numbers = [];
    document.getElementById("output").textContent = number;
});

const decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    if(!number.includes('.')){
        number += event.target.textContent;
        console.log("Current typing string", number);
        document.getElementById("output").textContent = number;
    }
});

const backspace = document.getElementById('backspace');
backspace.addEventListener('click', () => {
    if(number.length > 0) {
        number = number.substring(0, number.length - 1);
        document.getElementById("output").textContent = number;
    }
});

document.addEventListener('keydown', (event) => {
    if(event.key >= '0' && event.key <= '9') {
        number += event.key;
        document.getElementById("output").textContent = number;
    }
    console.log("Current typing string", number);

    if(event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/') {

    pushNumber();

        if (numbers.length === 2 && operator !== '') {
            calculate();
        }

        operator = event.key;
    }
    console.log("Current operator:", operator);

    if(event.key === 'Enter' || event.key === '=') {
        pushNumber();

        if (numbers.length === 2 && operator !== '') {
            calculate();
            operator = '';
        }
    }

    if(event.key === 'Backspace') {
        if(number.length > 0) {
            number = number.substring(0, number.length - 1);
            document.getElementById("output").textContent = number;
        }
    }

    if(event.key == '.') {
        if(!number.includes('.')){
            number += event.target.textContent;
            console.log("Current typing string", number);
            document.getElementById("output").textContent = number;
        }
    }
});

//fixes button issues within browser and using the enter button for calculations
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.blur();
    }
});