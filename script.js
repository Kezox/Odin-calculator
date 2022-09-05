function subtract(a, b) {
    return a-b
};
console.log(subtract(8, 5));


function multiply(a, b) {
    return a*b
};
console.log(multiply(5, 5));


function divide(a, b) {
    return a/b
};
console.log(divide(10, 5));

function add(a, b) {
    return a+b
};
console.log(add(3, 3));

// function operate(operator, a, b) {

// }


    const btn = document.querySelector('button');
    const display = document.querySelector('.display');
    btn.addEventListener('click', () => {
        display.appendChild(btn.textContent);
    });

