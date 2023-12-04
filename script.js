let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    askUser: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
    
                if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                } else {
                    console.log('error');
                    i--;
                }
            }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно много фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 2; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();

        //     if (genre == '' || genre == null) {
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

                if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};




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


//string.trim() - Метод trim() удаляет пробельные символы с начала и конца строки. 
//Пробельными символами в этом контексте считаются все собственно пробельные символы (пробел, табуляция, неразрывный пробел и прочие) 
//и все символы конца строки (LF, CR и прочие).