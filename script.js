let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);
// это работает лишь с примитивами, а не с объектами, массивами и т.д.
//------------------

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка
// // copy - не скопировал новый объект, он лишь передает значение по ссылке
// copy.a = 10;
// // модифицируешь копию? модифицируешь главный объект
// console.log(copy);
// console.log(obj);

//----------------------------
function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 11;

console.log(newNumbers);
console.log(numbers);

// существуют поверхностные и глубокие копии объекта (сверху поверхностная, именно поэтому сохраняются лишь главные свойства, на первом уровне)


// 2) Object.assign() - соединяет сразу два объекта, 1 аргумент - объект, в который нужно что-то поместить,
// 2 аргумент - объект, который нужно поместить
const add = {
    d: 17,
    e: 20
}
console.log(add);
console.log(Object.assign(numbers, add));

// так можно сделать и с пустым объектом, для этого первый аргумент указываем как {}
const clone = Object.assign({}, add);
clone.d = 55;
console.log(clone);

// 3) Создаём копию массива с помощью arr.slice();
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'Hello';
console.log(oldArray);
console.log(newArray);

// 4) Оператор разворота ...spread (для массивов)
const video = ['youTube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'VK', 'facebook'];

console.log(internet);
// либо
function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

//
const array = ["a", "b"];

const oneMoreArray = [...array];
console.log(array);
console.log(oneMoreArray);

//
const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
console.log(q);
console.log(newObj);