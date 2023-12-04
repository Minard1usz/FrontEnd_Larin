const arr = [11, 2, 32, 6, 18];
arr.sort();
// console.log(arr);
// arr.length состоит из последнего индекса + 1
arr[99] = 0;
console.log(arr.length);

// Методы массива
// 1) arr.pop - удаляет последний элемент в массиве
arr.pop();
console.log(arr);

// 2) arr.push - добавляет элемент в конец массива
arr.push(9);
console.log(arr);

// перебрать массив можно через цикл for
// чтобы определиться к определённому элементу массива, нужно указать его в []
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// либо for of, который можно остановить через break или continue
for (let value of arr) {
    console.log(value);
}

// for of работает только с массивоподобными сущностями: массив, псевдомассив, строка
// объекты перебрать через for of нельзя


// либо 3) arr.forEach(), остановить нельзя
// имеет 3 аргумента: 1 - элемент, 2 - номер по порядку, 3 - ссылка на массив, который перебираем
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// 4) arr.split(s) - помагает разделить элементы в массиве (превращает строку в массив), s - разделитель
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// // 5) arr.join(s) - объединяет в одну строку (превращает массив в строку), s - разделитель
// console.log(products.join('; '));

// 6) arr.sort() - метод сортировки, работает как сортировка строк, поэтому не стоит
// этим методом сортировать массив с числами, так как сортировка будет не верной
// products.sort();
// console.log(products);

// // шаблон для сортировки
function compareNum(a, b) {
    return a - b;
}
// // sort() использует алгоритм быстрой сортировки, поэтому должен принимать формулу a - b
// arr.sort(compareNum);
// console.log(arr);

// 7) arr.shift() - удаляет первый элемент из массива
console.log(arr);

arr.shift();
console.log(arr);

// 8) arr.unshift(item) - добавляет элемент в начало массива
arr.unshift(55);
// arr.sort(compareNum);
console.log(arr);

// 9) delete arr[1] - удаляет определенный элемент, в данном случае второй
delete arr[1];
console.log(arr);

// 10) arr.splice(index, count, elem1...) - удалить count (количество) элементов, начиная с index и заменить на элементы elem1...
arr.splice(0, 2, 100)
console.log(arr);

// 11) arr.slice(begin, end) - копирует часть массива с begin до end не включая
console.log(arr.slice(0, 3));

// 12) arr.reverse() - меняет порядок элементов на обратный
arr.reverse();
console.log(arr);

// 13) arr.concat(item1...) - создаёт новый массив, в который компируются элементы из arr + item1...
console.log(arr.concat('Hello'));

/* Методы перебора:
arr.forEach();
arr.map();
arr.every/some();
arr.filter();
arr.reduce();
*/
//--------------------------------------------------------------------------

// !!!Псевдомассивы не имеют методов, это лишь структура, которая хранит данные по порядку!!!

//----------------------------------------------------------------------------
// Объекты
let obj = new Object();
let obj2 = {};

// Свойства объектов:
let obj3 = {
    name: 'John'
}
obj3.name = 'David';
console.log(obj3);

// Методы объектов (действия, функции)
// let obj4 = {
//     sayName: function() {
//         return alert('David')
//     }
// }
// console.log(obj4.sayName());



//------------------------------------------------------------------------------
// Задания с Udemy
/* 1) 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
 */
const family = ['Peter', 'Ann', 'Alex', 'Linda'];
const family2 = [];

function showFamily(arr) {
    let str = '';
    if (Object.keys(arr).length !== 0) {
        str += `Семья состоит из: ${arr.join(', ')}`
        console.log(str);
    } else {
        str += `Семья пуста`
        console.log(str);
    }
}
showFamily(family);
showFamily(family2);
//-----------------------------------------------------
/* 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
Пример:
standardizeStrings(favoriteCities)  выведет в консоль
lisbon
rome
milan
dublin
Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. 
В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
*/
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let str = '';
    str += arr.join('\n');
    return console.log(str.toLowerCase());
}
standardizeStrings(favoriteCities);
//-------------------------------------------------------------
/* 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
Пример:
const someString = 'This is some strange string';
reverse(someString) => 'gnirts egnarts emos si sihT'
Функцию можно применить к любой строке. 
Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
Это очень интересная задача, которую можно решить несколькими способами. 
Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. 
*/
const someString = 'This is some strange string';

function reverse(str) {
    let data = str;
    if (typeof(data) !== 'string') {
        console.log('error');
    }
    const arr = data.split('');
    arr.reverse();
    return console.log(arr.join(''));
}
reverse(someString);

//---------------------------------------------
/* 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.
Пример:
availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
Вернет строку:
Доступные валюты:
UAH
RUB
Заметьте:
- CNY (юань) исчез из списка валют, значит такая валюта закончилась
- После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
- Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку
*/
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    arr = [...baseCurrencies, ...additionalCurrencies];
    if (Object.keys(arr).length === 0) {
        missingCurr = 'Нет доступных валют';
        console.log(missingCurr);
    } else {
        console.log(`Доступные валюты:\n`)
        arr.forEach(function(curr, i){
            if (curr !== missingCurr) {
                console.log(`${curr}\n`)
            }
        })
    }
    return;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');

// Массивы можно объединить с помощью (...) - spread оператора.