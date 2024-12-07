const display = document.querySelector('input[name="display"]');
let lastChar = ''; 

function handleButtonClick(value) {
    if (isOperator(value)) {
        if (isOperator(lastChar) || lastChar === '') return; 
    } else if (value === '.') {
        const parts = display.value.split(/[-+*/]/); 
        const lastPart = parts[parts.length - 1];
        if (lastPart.includes('.')) return;
    }
    display.value += value;
    lastChar = value;
}
function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}
function evaluateExpression() {
    try {
        if (isInvalidExpression(display.value)) {
            display.value = 'Invalid';
        } else {
            display.value = eval(display.value).toString();
        }
    } catch (error) {
        display.value = 'Invalid'; 
    }
    lastChar = ''; 
}
function clearDisplay() {
    display.value = '';
    lastChar = '';
}
function deleteLastChar() {
    display.value = display.value.slice(0, -1); 
    lastChar = display.value.slice(-1) || ''; 
}
function isInvalidExpression(expression) {
    const invalidPattern = /(^[+*/])|([+*/-]{2,})|([+*/-]$)/;
    return invalidPattern.test(expression);
}