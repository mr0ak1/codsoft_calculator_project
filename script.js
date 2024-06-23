// script.js
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let previousInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (value === 'C') {
                currentInput = '';
                previousInput = '';
                operator = '';
                display.innerText = '0';
            } else if (value === '=') {
                if (currentInput && previousInput && operator) {
                    currentInput = evaluate(previousInput, currentInput, operator);
                    display.innerText = currentInput;
                    previousInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    if (previousInput && operator) {
                        currentInput = evaluate(previousInput, currentInput, operator);
                        display.innerText = currentInput;
                    }
                    previousInput = currentInput;
                    currentInput = '';
                    operator = value;
                }
            } else {
                currentInput += value;
                display.innerText = currentInput;
            }
        });
    });

    function evaluate(num1, num2, operator) {
        switch (operator) {
            case '+': return (parseFloat(num1) + parseFloat(num2)).toString();
            case '-': return (parseFloat(num1) - parseFloat(num2)).toString();
            case '*': return (parseFloat(num1) * parseFloat(num2)).toString();
            case '/': return (parseFloat(num1) / parseFloat(num2)).toString();
            default: return num2;
        }
    }
});
