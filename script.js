// document - обращение ко всему документу
// document.getElementById('id) - получить элемент по ID, который уникален - 1 на странице
// const box = document.getElementById('box');
// console.log(box);

// // document.getElementsByTagName('elements') - получить коллекцию элементов
// const btns = document.getElementsByTagName('button');
// console.log(btns);

// // document.getElementsByTagName('elements'[id]) - получить один конкретный элемент из коллекции
// const btn1 = document.getElementsByTagName('button')[1];
// console.log(btn1);
// // либо variable[id];
// console.log(btns[3]);

// // document.getElementsByClassName('className') - получить коллекцию элементов по классу
// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// // Более современный метод получения элемента (NodeList)
// // document.querySelectarAll('.className');
// const hearts = document.querySelectorAll('.heart');
// console.log(hearts);
// // можно применять методы перебора, к примеру forEach
// hearts.forEach(item => {
//     console.log(item);
// });

// // document.querySelector('.className') - получаем один, первый элемент по значению
// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

//----------------------------------------------------------
const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(element) - получить элемент в качестве объекта
console.dir(box);

// element.style.asset - изменить элемент через JS
box.style.backgroundColor = 'blue';
box.style.width = '500px';

// можно передавать стили в виде текста
box.style.cssText = 'background-color: yellow; width: 530px';

// можно подставлять переменные через бектики `${}`

// если работаем с коллекцией, не забываем указывать индекс element[index];
btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// можем использовать цикл for
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

// но лучше специальный метод перебора forEach()
hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

// document.createElement('element') - создаём элемент
const div = document.createElement('div');
const text = document.createTextNode('Love');

// стилизация
div.classList.add('black');

// DOM дерево
// document.place.append - добавляет созданный элемент на страницу (в конце)
document.body.append(div);

// можно получать элементы и сразу добавлять в них новые
// document.querySelector('.wrapper').append(div);
// wrapper.append(div);

// element.prepend(element) - вставляет в начало блока
// wrapper.prepend(div);

// можно вставлять перед конкретным элементом element.before(element);
// hearts[0].before(div);

// либо после конкретного элемента element.after(element);
// hearts[0].after(div);

// можно удалять элементы element[index].remove();
// circles[0].remove();

// можно заменить элементы element[index].replaceWith(element);
// hearts[0].replaceWith(circles[0]);

// Далее устаревшие конструкции
// element.appendChild(element)
wrapper.appendChild(div);

// вставить перед parent.insertBefore(elementToInsert, elementToInsertBefore);
wrapper.insertBefore(div, hearts[0]);

// удалить элемент parent.removeChild(element);
wrapper.removeChild(hearts[1]);

// заменить parent.replaceChild(elementToInsert, elementToReplace);
wrapper.replaceChild(circles[0], hearts[0]);

// Добавляем элементы, можно использовать HTML код
div.innerHTML = '<h1>Hello World!</h1>';

// либо, но таким образом нельзя вставлять HTML код
div.textContent = "hello!"

// есть ещё вариант
div.insertAdjacentHTML('beforebegin', '<h2>Goodbye!</h2>');
div.insertAdjacentHTML('afterbegin', '<h2>Goodbye!</h2>');
div.insertAdjacentHTML('beforeend', '<h2>Goodbye!</h2>');
div.insertAdjacentHTML('afterend', '<h2>Goodbye!</h2>');