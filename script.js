// document - обращение ко всему документу
// document.getElementById('id) - получить элемент по ID, который уникален - 1 на странице
const box = document.getElementById('box');
console.log(box);

// document.getElementsByTagName('elements') - получить коллекцию элементов
const btns = document.getElementsByTagName('button');
console.log(btns);

// document.getElementsByTagName('elements'[id]) - получить один конкретный элемент из коллекции
const btn1 = document.getElementsByTagName('button')[1];
console.log(btn1);
// либо variable[id];
console.log(btns[3]);

// document.getElementsByClassName('className') - получить коллекцию элементов по классу
const circles = document.getElementsByClassName('circle');
console.log(circles);

// Более современный метод получения элемента (NodeList)
// document.querySelectarAll('.className');
const hearts = document.querySelectorAll('.heart');
console.log(hearts);
// можно применять методы перебора, к примеру forEach
hearts.forEach(item => {
    console.log(item);
});

// document.querySelector('.className') - получаем один, первый элемент по значению
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);