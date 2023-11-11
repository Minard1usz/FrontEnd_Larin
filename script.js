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


// аргументи функції
const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);
convert(240, usdCurr);
convert(240, eurCurr);

// щоб функція була корисною, необхідно створювати лише її функціонал з аргументами, а необхідні дані повинні бути поза функцією
// принцип DRY - don't repeat yourself


// важливість return
// 1. створюємо функцію
function secondConvert(amount, curr) {
    return curr * amount;
}

// 2. створюємо знижку
const discount = 0.9;

// 3. створюємо ще одну функцію, в якій отриманий результат минулої фунції множимо на знижку
function promotion(result) {
    console.log(result * discount);
}

// 4. фіксуємо результат
const res = secondConvert(500, usdCurr)

// 5. виводимо результат
promotion(res);

// код, який вказаний після return працювати не буде, він недосяжний
// -----------------
function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('done');
}
test();

// console.log('done') - недосяжний код, адже він знаходиться після return

// функція завжди щось повертає, по стандарту це буде undefined, але можна чітко вказати, що ви хочете
// побачити в return
function doNothing() {};
console.log(doNothing());

//---------------------------------
/*1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку. */
function showTheName(name) {
    return 'Привіт, ' + name + '!';
}
console.log(showTheName('Alex'));
console.log(showTheName('Leya'));

/*2) Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].  */
function returnNeighboringNumbers(num) {
    let arr = [];
    arr.push(num - 1, num, num + 1);
    return arr;
}
console.log(returnNeighboringNumbers(10));
console.log(returnNeighboringNumbers(5));

/* 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
Примеры:
Вызов функции getMathResult(5, 3) даст ответ 5---10---15
Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30
Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50
Вызов функции getMathResult(10, '5') даст ответ 10
Вызов функции getMathResult(10, 0) даст ответ 10
Вызов функции getMathResult(20, -5) даст ответ 20 */

function getMathResult(baseNum, repNum) {
    if (typeof(repNum) !== 'number' || repNum <= 0) {
        return baseNum;
    }

    let str = '';

    for (let i = 1; i <= repNum; i++) {
        if (i === repNum) {
            str += `${baseNum * i}`;
        } else {
            str += `${baseNum * i} --- `
        }
    }
    return str;
}
console.log(getMathResult(5, 3));
console.log(getMathResult(10, 5));