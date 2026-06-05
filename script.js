let a = '0';
let operator = ' ';
let b = ' ';


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
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case ' + ':
            return add(a, b);
        case ' - ':
            return subtract(a, b);
        case ' * ':
            return multiply(a, b);
        case ' / ':
            return divide(a, b);
        default:
            console.error(`${operator} is invalid as an operator!`);
    }
}

const operatorRow = document.getElementById('operatorRow');

operatorRow.addEventListener('click', (event) => {
    if(event.target.tagName === 'BUTTON') {
        const operation = event.target.id;
    
        switch (operation) {
            case 'add':
                operator = ' + ';
                break;
            case 'subtract':
                operator = ' - ';
                break;
            case 'multiply':
                operator = ' * ';
                break;
            case 'divide':
                operator = ' / ';
                break;
            default:
                operator = ' ';
        }
    }
    console.log(operator);
});




