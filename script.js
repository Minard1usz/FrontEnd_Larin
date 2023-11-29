// Callback функция - это функция, которая передана в качестве аргумента в другой функции.

// Объяснение с Udemy Иван Петриченко
// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }


// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');
// }

// learnJS('JavaScript', done);
//---------------------------------------------------------------

// Объяснение ItGid.info с YouTube
// function first(argumentFunction) {
//     console.log(1);
//     argumentFunction();
// }

// function second(a, b) {
//     console.log(a + b);
// }

// first(function() {
//     second(5, 7);
// });
// second(4, 7);

// необходима функция-обёртка

//---------------------------------------------------------------
//Мой пример
function firstFunc(elem) {
    console.log('Привет! Сейчас запущу вторую функцию...');
    setTimeout(function () {
        elem();
    }, 500);
}

function secondFunc() {
    console.log('Готово!');
}

firstFunc(secondFunc);