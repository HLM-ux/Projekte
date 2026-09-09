const display = document.querySelector('.calc input[type="text"]');
const buttons = document.querySelectorAll('.btns button');

let currentInput = '';
let previousInput = '';
let operation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.appendNumber) {
            currentInput += button.dataset.appendNumber;
            display.value = currentInput;
        } else if (button.dataset.operation) {
            if (currentInput) {
                previousInput = currentInput;
                operation = button.dataset.operation;
                currentInput = '';
            }
        } else if (button.dataset.calculate) {
            if (previousInput && currentInput && operation) {
                const result = evaluate(previousInput, currentInput, operation);
                display.value = result;
                currentInput = result.toString();
                previousInput = '';
                operation = '';
            }
        } else if (button.dataset.clear) {
            currentInput = '';
            previousInput = '';
            operation = '';
            display.value = '';
        }
    });
});

function evaluate(num1, num2, op) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;
        case '/': return n2 !== 0 ? n1 / n2 : 'Error';
        case '%': return n1 % n2;
        default: return '';
    }
}


/* not mine :/ */