// /*1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
// Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. */
// function calculateVolumeAndArea(inputData) {
//     const volumeData = Math.pow(inputData, 3);
//     const areaData = (6 * (inputData * inputData));
//     if (typeof (inputData) !== 'number' || inputData < 0 || !Number.isInteger(inputData)) {
//        return console.log('При вычислении произошла ошибка')
//     }
//     const result = `Объем куба: ${volumeData}, площадь всей поверхности: ${areaData}`;
    
//     return console.log(result);
// }

// calculateVolumeAndArea(5);
// calculateVolumeAndArea(15);
// calculateVolumeAndArea(15.5);
// calculateVolumeAndArea('15');
// calculateVolumeAndArea(-15);

// //----------------------------------------
// /* 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

// Функция принимает только целое число от 1 до 36.

// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

// "Ошибка. Проверьте правильность введенного номера места"

// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует" */

// function getCoupeNumber(seatNumber) {
//     if (isNaN(seatNumber) || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return ('Ошибка. Проверьте правильность введенного номера места');
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return ('Таких мест в вагоне не существует');
//     }

//     return Math.ceil(seatNumber / 4);
    
// }
// getCoupeNumber(27);

// //-------------------------
// /* 3) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты. */

// function getTimeFromMinutes(inputData) {
//     let result;
//     if (isNaN(inputData) || inputData < 0 || !Number.isInteger(inputData)) {
//         return console.log('Ошибка, проверьте данные');
//     }

//     if (inputData < 60 || inputData >= 300 && inputData < 1260) {
//         return console.log(`Это ${Math.floor(inputData / 60)} часов ${inputData % 60} минут`);
//     }

//     if (inputData == 60 || inputData < 120 || inputData >= 1260 && inputData < 1320) {
//         return console.log(`Это ${Math.floor(inputData / 60)} час ${inputData % 60} минут`);
//     }
    
//     if (inputData > 60 && inputData < 300 || inputData > 1260 && inputData <= 1440) {
//         return console.log(`Это ${Math.floor(inputData / 60)} часа ${inputData % 60} минут`);
//     }

//     return console.log(result);
// }
// getTimeFromMinutes(0);
// getTimeFromMinutes(60);
// getTimeFromMinutes(120);
// getTimeFromMinutes(180);
// getTimeFromMinutes(240);
// getTimeFromMinutes(300);
// getTimeFromMinutes(360);
// getTimeFromMinutes(420);
// getTimeFromMinutes(480);
// getTimeFromMinutes(540);
// getTimeFromMinutes(600);
// getTimeFromMinutes(660);
// getTimeFromMinutes(720);
// getTimeFromMinutes(780);
// getTimeFromMinutes(840);
// getTimeFromMinutes(900);
// getTimeFromMinutes(960);
// getTimeFromMinutes(1020);
// getTimeFromMinutes(1080);
// getTimeFromMinutes(1140);
// getTimeFromMinutes(1200);
// getTimeFromMinutes(1260);
// getTimeFromMinutes(1320);
// getTimeFromMinutes(1380);
// getTimeFromMinutes(1440);
// //-----------------------------------------------------------------------------------
// /* 4) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

// Пример:
// findMaxNumber(1, 5, 6.6, 11); =>  11
// findMaxNumber(1, 5, '6', '10');  =>  0

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :) */
// function findMaxNumber(a, b, c, d) {
//     if (typeof (a) != 'number' ||
//         typeof (b) != 'number' ||
//         typeof (c) != 'number' ||
//         typeof (d) != 'number') {
//         return 0;
//     }
    
//     return console.log(Math.max(a, b, c, d));
// }
// findMaxNumber(2, 5, 6.6, 11);
// //------------------------------------------------------------------

// /* 5) Числа Фибоначчи (каждое последующее число равно сумме предыдущих двух чисел) 
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

// Пример:
// fib(4) => ''0 1 1 2"
// fib(7) => ''0 1 1 2 3 5 8"
// fib('7') => ''"
// fib(1) => "0"
// fib(0) => ''"
// */ 
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return '';
//     }

//     let result = '';
//     let a = 0;
//     let b = 1;
//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${a}`;
//         } else {
//             result += `${a} `;
//         }
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return console.log(result);
// }

// fib(4);
// fib(7);
// //-------------------------


/* В этом упражнении мы с вами потренируемся находить ошибки и неточности в коде. 
Дебаг (поиск ошибок, debug) - очень важный навык любого программиста. И чем лучше вы им будете владеть, тем легче будет вам в первую очередь.
Мы уже разобрали один из важнейших инструментов для поиска ошибок у front-end разработчиков - это консоль разработчика прямо в браузере. 
Да, позже будут еще наслаиваться инструменты, но это один из основных. 
Не забывайте его использовать и внимательно читайте те сообщения, которые выводятся. 
Ведь все это было создано разработчиками для разработчиков, чтобы вам было проще. 
Ну и никто не отменяет древний метод поиска ошибок - вывод через console.log(). Но это только пока вы новичок :)
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда. Всю информацию для решения мы проходили в предыдущих уроках.
Задание:
У вас есть объект с данными о ресторане. Начинающий разработчик создал несколько функций, которые работают неправильно и он не может понять почему. Нужно исправить функции так, чтобы они давали всегда правильный результат.
1) Функция isOpen не хочет правильно работать. Что мы уже не пробовали подставлять в неё - результат все время неправильный. Необходимо найти причины и исправить.
2) Функция isAverageLunchPriceTrue должна брать цены двух любых блюд из меню, складывать их и сравнивать с средним чеком (averageLunchPrice).
Сейчас функция работает, но постоянно выдает неправильный результат. Ведь из представленного меню сумма двух любых цен всегда будет больше 20. Необходимо найти причину и исправить.
3) Функция transferWaitors создана для того, чтобы копировать шаблон данных и передавать их в другой ресторан. Конечно, в другом ресторане будут другие блюда, другие официанты и тп. Сейчас эта функция только в начале разработки и должна менять данные про официантов.
Но в нынешнем виде мы обнаружили, что после её запуска не только копия данных содержит новых официантов, но и основные данные! В restorantData сотрудник Alice исчезает и заменяется Mike! Необходимо найти причину и немедленно исправить, чтобы данные были разделены.
P.S. Может показаться сложным, но задача решается очень просто, если вы помните один принцип :)
 */
const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней'; 
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);




//---------------------------------------------
// function countStudents() {
//     let count = 0;
//     for (let i = 0; i <= 10; i++) {
//         count = i;
//         console.log(count);
//     }
// }
// countStudents();
//---------------------------------------------