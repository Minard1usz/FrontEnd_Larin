//методы и свойства строки и чисел
// 1) str.length - показывает количество символов в строке
const str = "TeSt";
console.log(str.length);
//str[i] - показывает символ по индексу
console.log(str[2]);
console.log(str);

const arr = [1, 2, 3];
console.log(arr.length);
// 2) str.toUpperCase() - преобразовывает строку в верхний регистр
console.log(str.toUpperCase());

// 3) str.toLowerCase() - преобразовывает строку в нижний регистр
console.log(str.toLocaleLowerCase());

// 4) str.indexOf() - помогает найти индекс элемента
const fruit = "Some fruit";
console.log(fruit.indexOf('fruit'));

//5) str.slice(startingIndex, finishingIndex) - вырезает необходимую часть элемента
//где 0 - начало строки, следующая цифра до какого номера вырезать не включительно
// можно указать лишь начальный индекс, тогда строка вырезается до конца
// можно использовать -индекс, тогда отсчёт идет с конца
const logg = "Hello, World!"
console.log(logg.slice(7, 12))

const sportsCars = 'Ferrari and Lamborghini'
console.log(sportsCars.slice(0, 7));
console.log(sportsCars.slice(7, 11));
console.log(sportsCars.slice(11, 23));
console.log(sportsCars.slice(11));
console.log(sportsCars.slice(-23, -11));

// 6) str.substring() - похожая команда на str.slice(), но не имеет отрицательных индексов
console.log(logg.substring(6, 12));

// 7) str.substr(startIndex, length) - указывает что вырезать с начального индекса + длинна
console.log(logg.substr(0, 5));



//--------------------------------
// методы чисел
// 1) Math.round(num) - округляет число к ближайшему целому
const num = 12.2;
console.log(Math.round(num));

// 2) parseInt(num) - превращает число в другую меру исчисления
const test = "12.2px";
console.log(parseInt(test));

// 3) parseFloat(num) - возвращает не целое число
console.log(parseFloat(test));