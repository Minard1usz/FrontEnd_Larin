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