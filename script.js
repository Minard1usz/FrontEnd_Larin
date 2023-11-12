let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

function writeYourGenres() {
    let i = 1;
    while (i <= 3){
        const favoriteGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(favoriteGenres);
        i++;
    }
}
writeYourGenres();

function askUser() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
}
askUser();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно много фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка');
    }
}
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private == false) {
        console.log(personalMovieDB);
    }
}
showMyDB();
//-----------------------------------------------------------
// переписать цикл еще двумя способами
// 2) цикл While()
// function askMe() {
//     let i = 0;
//     while (i < 2) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         i++;
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//         }
//     }
    // if (personalMovieDB.count < 10) {
    //     console.log('Просмотрено довольно много фильмов');
    // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    //     console.log('Вы классический зритель');
    // } else if (personalMovieDB.count >= 30) {
    //     console.log('Вы киноман!');
    // } else {
    //     console.log('Произошла ошибка');
    // }
    
// }
// askMe();
//-----------------------------------------------------------
// 3) do...while
// function askMore() {
//     let i = 0;
//     do {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');
//         i++;
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//         }
//     } while (i < 2);
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно много фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман!');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// askMore();
//-----------------------------------------------------------
/*  isNaN() - проверяет сущность на "не число", если данные "не число" - true
*/
//


// console.log(personalMovieDB);