// 1. логічний оператор "та" - &&, обидві умови виконались
// оператор && завжди зупиняється на першому false
// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('take it!')
// } else {
//     console.log('sorry')
// }

// всегда false - 0, "", NAN, null, undefined
// всё остальное - true

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries)

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'awdawaddawd');

// if (hamburger === 3 && cola === 1 && fries === 1) {
//     console.log('take it!')
// } else {
//     console.log('sorry')
// }

// 2. логічний оператор "або" - || перевіряє на правду один з аргументів
const hamburger = 3;
const cola = 0;
const fries = 3;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('take it!')
} else {
    console.log('sorry')
}

console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets)

let johnReport, alexReport, samReport, mariaReport = 'done';

console.log(johnReport || alexReport || samReport || mariaReport)

// 3. логічний оператор НЕ - !
console.log(!0);

// ||= логічне присвоєння "або", &&= логічне присвоєння "та", ?? оператор нульового злиття, ??= оператор нульового присвоєння


console.log(NaN || 2 || undefined);
console.log(NaN && 2 && undefined);
console.log(1 && 2 && 3);
console.log(!1 && 2 || !3);
console.log(25 || null && !3);
console.log(NaN || null || !3 || undefined || 5);
console.log(NaN || null && !3 && undefined || 5);
console.log (5 === 5 && 3 > 1 || 5);