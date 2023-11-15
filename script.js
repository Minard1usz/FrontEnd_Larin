/*1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. */
function calculateVolumeAndArea(inputData) {
    const volumeData = Math.pow(inputData, 3);
    const areaData = (6 * (inputData * inputData));
    if (typeof (inputData) !== 'number' || inputData < 0 || !Number.isInteger(inputData)) {
       return console.log('При вычислении произошла ошибка')
    }
    const result = `Объем куба: ${volumeData}, площадь всей поверхности: ${areaData}`;
    
    return console.log(result);
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);

//----------------------------------------
/* 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

Функция принимает только целое число от 1 до 36.

Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:

"Ошибка. Проверьте правильность введенного номера места"

Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует" */

function getCoupeNumber(seatNumber) {
    if (isNaN(seatNumber) || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return ('Ошибка. Проверьте правильность введенного номера места');
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return ('Таких мест в вагоне не существует');
    }

    return Math.ceil(seatNumber / 4);
    
}
getCoupeNumber(27);

//-------------------------
/* 3) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты. */

function getTimeFromMinutes(inputData) {
    let result;
    if (isNaN(inputData) || inputData < 0 || !Number.isInteger(inputData)) {
        return console.log('Ошибка, проверьте данные');
    }

    if (inputData < 60 || inputData >= 300 && inputData < 1260) {
        return console.log(`Это ${Math.floor(inputData / 60)} часов ${inputData % 60} минут`);
    }

    if (inputData == 60 || inputData < 120 || inputData >= 1260 && inputData < 1320) {
        return console.log(`Это ${Math.floor(inputData / 60)} час ${inputData % 60} минут`);
    }
    
    if (inputData > 60 && inputData < 300 || inputData > 1260 && inputData <= 1440) {
        return console.log(`Это ${Math.floor(inputData / 60)} часа ${inputData % 60} минут`);
    }

    return console.log(result);
}
getTimeFromMinutes(0);
getTimeFromMinutes(60);
getTimeFromMinutes(120);
getTimeFromMinutes(180);
getTimeFromMinutes(240);
getTimeFromMinutes(300);
getTimeFromMinutes(360);
getTimeFromMinutes(420);
getTimeFromMinutes(480);
getTimeFromMinutes(540);
getTimeFromMinutes(600);
getTimeFromMinutes(660);
getTimeFromMinutes(720);
getTimeFromMinutes(780);
getTimeFromMinutes(840);
getTimeFromMinutes(900);
getTimeFromMinutes(960);
getTimeFromMinutes(1020);
getTimeFromMinutes(1080);
getTimeFromMinutes(1140);
getTimeFromMinutes(1200);
getTimeFromMinutes(1260);
getTimeFromMinutes(1320);
getTimeFromMinutes(1380);
getTimeFromMinutes(1440);
//-----------------------------------------------------------------------------------
/* 4) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:
findMaxNumber(1, 5, 6.6, 11); =>  11
findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :) */
function findMaxNumber(a, b, c, d) {
    if (typeof (a) != 'number' ||
        typeof (b) != 'number' ||
        typeof (c) != 'number' ||
        typeof (d) != 'number') {
        return 0;
    }
    
    return console.log(Math.max(a, b, c, d));
}
findMaxNumber(2, 5, 6.6, 11);
//------------------------------------------------------------------
