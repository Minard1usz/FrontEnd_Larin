/*1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). 
Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах. */
// function calculateVolumeAndArea() {
//     const inputData = +prompt('Введите длину ребра куба в сантиметрах');
//     const result = Math.pow(inputData, 3);
//     return console.log(result);
// }
// calculateVolumeAndArea(5);

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

