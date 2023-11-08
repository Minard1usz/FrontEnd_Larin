// 1. Простые условия
if (4 == 9) {
    console.log('ok')
} else {
    console.log('incorrect')
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok');
}

// 2. Условия с тернарным оператором (имеет 3 аргумента)
// левая сторона до "?" - если, тогда выводим консоль, : - иначе
(num == 50) ? console.log('Ok!') : console.log('Error');


// 3. Switch case - проверяет на строгое сравнение "==="
const number = 50;

switch (number) {
    case 49: 
        console.log('Wrong!');
        break;
    case 100:
        console.log('Wrong again!');
        break;
    case 50:
        console.log('Correct!');
        break;
    default:
        console.log('Another time');
        break;
} 