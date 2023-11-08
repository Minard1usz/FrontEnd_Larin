/* Задания на использование циклов и условий
Давайте перед серьезными практическими задачами потренируемся использовать циклы и условия.

Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

Все данные для решения задач мы с вами рассмотрели в предыдущих обязательных уроках. Каждая задача проверяется отдельно, но по порядку, так что вы будете получать разные уведомления при проверке.

Задачи:

1) При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой */
function firstTask() {
    let num = 5;
    while (num <= 10) {
        console.log(num)
        num++
    }
}
firstTask();

/*
2) При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл */
function secondTask() {
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);    
    }
}
secondTask();

/*
3) При помощи цикла for выведите чётные числа от 2 до 10 включительно */
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        } else {
            continue;
        }
    }
}
thirdTask();

/*
4) Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть. 
 Цикл, который нужно переписать:
 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
         console.log(i);
     }
 } 
 */

function fourthTask() {
    let num = 2;
    while (num <= 16) {
        if (num % 2 === 0) {
            num++
            continue;
        } else {
            console.log(num);
        }
        num++
    }
}
fourthTask();

 /*
5) Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0] */
function fifthTask() {
    let arr = [];
    for (i = 5; i <= 10; i++) {
        arr.push(i);
    }
    console.log(arr);
}
fifthTask();
// ----------------------------------------------------

/*
Задачи:

6) Заполните новый массив (result) числами из старого (arr). Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
Должен получиться точно такой же массив */

function sixthTask() {
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    result.push(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);

    console.log(result);
    return result;
}
sixthTask();


/*
7) Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
Для определения типа данных используйте typeof();
Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ] */
function seventhTask() {
    const data = [10, 20, 'Shopping', 20, 'Homework'];

    for (i = 0; i < data.length; i++) {
        if (typeof data[i] === 'number') {
            data[i] *= 2;
        } else if (typeof data[i] === 'string') {
            data[i] += ' - done';
        }
    } 
    console.log(data);
    return data;
}
seventhTask();


/*
8) Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
*/
function eightTask() {
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 0; i < data.length; i++) {
        result.push(data[i])
    }
    result.reverse()
    console.log(result);
    return result;
}
eightTask();


