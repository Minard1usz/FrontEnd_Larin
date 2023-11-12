const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

// function askUser() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
            
//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно много фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман!');
//         } else {
//             console.log('Произошла ошибка');
//         }

// }
// askUser();
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
// 3) do...while
function askMore() {
    let i = 0;
    do {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
        i++;
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
        }
    } while (i < 2);
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
askMore();

console.log(personalMovieDB);