function hello() {
    console.log('Hello, World!')
    // debugger;
};
hello();

function hi() {
    console.log('Say hi!');
}
hi();

const arr = [1, 14, 4, 30, 54],
    sorted = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);





/* Динамическая типизация */
// Как превратить что-то в строку
// 1) String(data);
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) Конкатенация
console.log(typeof((5 + '')));

const num = 5;
console.log('https://vk.com/catalog/' + num);

const fontSize = 26 + 'px';

// Как превратить что-то в число
// 1) Number(data);
console.log(typeof(Number('4')));

// 2) Унарный плюс +
console.log(typeof(+ '5'));

// 3) parseInt(data, system); - первый аргумент - данные, второй - система (десятичная, и т.д.)
console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello!', '');
// console.log(answ);

// от пользователя мы всегда получаем данные "string", а нам уже будет нужно их переобразовывать
//----------------------------------------------------------

// Как превратить что-то в булиновое значение - To boolean (true / false);
// всегда false: 0, ''(пустая строка), null, undefined, NaN;
// всё остальное true;

// 1) Switcher
let switcher = null;
switcher = 1;

if (switcher) {
    console.log('Working...');
} else {
    console.log('Not working :(');
}

// 2) Boolean(data);
console.log(typeof(Boolean('4')));

// 3) !! - два знака отрицания = boolean
console.log(typeof(!!'4444'));