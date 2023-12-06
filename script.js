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

// 7) Object.seal() - предотвращает добавление новых свойств объекта, но позволяет изменять
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

//-------------------------------------------------------------------------
// Задания с Udemy
//(*) Продвинутая задача на работу с объектами и массивами
/* У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. 
Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; 
стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.
Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. 
Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', 
если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:
- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
- определение того, хватает ли бюджета на оплату такого объема;
- все числа идут без единиц измерения для упрощения, просто цифры и все;
- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект. */
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    let volume = 0;

    data = shoppingMallData.shops;
    data.forEach(function(shops) {
        square += shops.width * shops.length;
        return square;
    });
    console.log(`Общая площадь всех магазинов: ${square} кв. м.`);

    volume = square * shoppingMallData.height;
    console.log(`Общий объем торгового центра: ${volume} куб. м.`);

    let result = volume * shoppingMallData.moneyPer1m3;
    result.toString();

    if (result > shoppingMallData.budget) {
        console.log('Бюджета недостаточно');
    } else {
        console.log('Бюджета достаточно');
    }
    console.log(`К оплате ${result}$`);
}
isBudgetEnough();
// возвращает строку
//-------------------------------------------------
/*(*) Продвинутая задача на работу с объектами и массивами
В этой задаче мы уже усложним работу с объектами и массивами. Она необязательна и тут можно попробовать свои силы.
Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.
Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Задача:

У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.
Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. 
Просто распишите логику действий строка за строкой.
 */
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Zlatan', 'Agnieszka'];

function sortStudentsByGroups(arr) {
    arr = students.sort();
    const group1 =[];
    const group2 =[];
    const group3 =[];
    let rest = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            group1.push(arr[i]);
        } else if (i < 6) {
            group2.push(arr[i]);
        } else if (i < 9) {
            group3.push(arr[i]);
        } else {
           rest.push(arr[i]);
        }
    }
 
    return console.log([group1, group2, group3, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]);
}
sortStudentsByGroups();
