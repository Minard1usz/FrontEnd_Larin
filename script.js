//Объекты и их методы
// Способ 1:
// const obj = new Object();

// Способ 2:
const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Do the function');
    }
};
// console.log(options.name);
// console.log(options['colors']['border']);
options.makeTest();

// Методы
// 1) Object.keys() - получаем массив со всеми ключами
// также есть свойство length (быстрее, чем через counter)
console.log(Object.keys(options));
console.log(Object.keys(options).length);

// 2) Object.values() - создает массив значений объекта
console.log(Object.values(options));

// 3) Object.entries() - создает вложенный массив пар "ключ-значение" объекта
console.log(Object.entries(options));

// 4) Object.assign() - копирует значения из одного объекта в другой
const name = {
    firstName: 'John',
    lastName: 'Cold'
};

const details = {
    job: 'waiter',
    employer: 'SOHO'
};
const character = Object.assign(name, details);
console.log(character);
// либо через spread оператор
// const character = {...name, ...details};

// 5) Object.freeze() - предотвращает модификацию свойств и значений объекта и добавление или удаление свойств объекта.
const user = {
    username: 'Daniel',
    password: 'attendant212'
};

const newUser = Object.freeze(user);
newUser.password = 'wdge341';
newUser.active = true;
console.log(newUser);

// 6) Object.isFrozen() - позволяет определить, был ли объект заморожен или нет, и возвращает логическое значение.
console.log(Object.isFrozen(newUser));

// 7) Object.seal() - предовращает добавление новых свойств объекта, но позволяет изменять
// существующие свойства
const car = {
    brand: 'Mazda',
    model: '6'
}

const newCar = Object.seal(car);
newCar.brand = 'KIA';
newCar.sold = true;
console.log(newCar);
// уже существующий brand отредактировать было можно, а добавить свойство sold - нет.



// // чтобы удалить, используем оператор delete
// delete options.name;
// console.log(options);


// ВАЖНО!!! 
// Чтобы перебрать объект, используем for (key in obj);
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// };

// Если присутствует объект в объекте, нужно использовать условие либо рекурсию
// можно использовать перебор со счётчиком
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


// Деструктуризация объекта (достаём данные)
const {border, bg} = options.colors;
console.log(border);
console.log(bg);