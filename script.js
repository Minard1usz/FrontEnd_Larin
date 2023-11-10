// 1. function declaration - function foo() {code}, створюється одразу
let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}
showFirstMessage('I am function declaration');
console.log(num);


function calc(a, b) {
    return (a + b);
}
console.log(calc(5, 5));
console.log(calc(25, 51));
console.log(calc(35, 65));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

// 2. function expression - let foo = function() {code}, створюється лише тоді, коли до неї доходить поток коду
const logger = function() {
    console.log('I am function expression')
}
logger();


// 3. arrow function - () => {}, в основному використовується для обробника подій
const calculate = (a, b) => {return a + b}; 