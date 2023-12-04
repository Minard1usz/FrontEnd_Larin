// Object oriented programming
let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); // string
console.log(typeof(strObj)); // object

console.dir([1, 2, 3]); // array
//--------------------------------------------------------------------
/* Когда мы имеем два объекта и хотим, чтобы второй имел какие-то значения из первого,
1) можно поступить устаревшим способом, дописывая второму свойства первого: 
obj2__proto__ = obj1 */
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const john = {
    health: 100,
};

// john.__proto__= soldier;
// console.log(john);

// john.sayHello();
// такой подход устарел и его уже не используют

/* Современные способы работы с прототипами*/
// 1) Object.setPrototypeOf(dataToChange, dataToTakeFrom) 
Object.setPrototypeOf(john, soldier);
john.sayHello();

// 2) Object.create(dataToTakeFrom);
const fred = Object.create(soldier);
console.log(fred);
/*Изменение прототипа [[Prototype]] объекта является, по самой природе оптимизации доступа к свойствам в современных движках JavaScript, 
очень медленной операцией, это справедливо для любого браузера и движка JavaScript. Изменение прототипов очень тонко и обширно влияет на производительность, 
причём это влияние не ограничивается просто временем для операции присваивания obj.__proto__ = ..., оно может распространяться на любой код, который имеет 
доступ к любому объекту, чей прототип [[Prototype]] был изменён. Если вы заботитесь о производительности, вы никогда не должны изменять прототип [[Prototype]] объекта. 
Вместо этого создайте объект с нужным прототипом [[Prototype]], с помощью метода Object.create().*/

/*хотя на сегодняшний момент большинство браузеров поддерживают свойство Object.prototype.__proto__, его поведение только недавно было 
стандартизировано в новой спецификации ECMAScript 6. Если вам требуется поддержка браузеров до этой спецификации, рекомендуется 
использовать вместо него метод Object.getPrototypeOf().*/

