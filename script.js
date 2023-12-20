// Обработчики событий можно использовать:
// 1) через файл HTML: onclick="alert('hi')", для маленьких скриптов, не использовать в больших проектах!

// 2) использовать свойства DOM дерева, тоже почти не используется в больших проектах
const btn = document.querySelector('button');
// btn.onclick = function () {
//     alert('hi!');
// };

// btn.onclick = function () {
//     alert('second click');
// };
// первое свойство заменяет второе, переназначется. Также, таким способом тяжело потом удалить событие.

// 3) addEventListener('name', callback function)
btn.addEventListener('click', () => {
    alert('eventListener');
});

btn.addEventListener('click', () => {
    alert('second click');
});

// теперь eventListener сохраняет первое действие и добавляет второе
// все события выполняются в порядке очереди
// addEventListener('method', callback)

const btn2 = document.querySelector('#btn2');
// btn2.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//     console.log('Hover');
// });

// callback функция должна иметь аргумент, например e - event

// removeEventListener('method', callback) - удаляет EventListener

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn2.removeEventListener('click', deleteElement);
    // }
};
btn2.addEventListener('click', deleteElement);


// всплытие событий, сначала срабатывает на вложенном элементе, потом по иерархии выше на родителе и выше
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', deleteElement);

//event.preventDefault() - убираем стандартное поведение функции
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);
});

// навешиваем один обработчик на много элементов
// необходимо перебрать весь псевдомассив с помощью forEach()
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});


// опции события, addEventListener() имеет 3 аргумента