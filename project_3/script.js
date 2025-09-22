/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilm; // Переменная для количества просмотренных фильмов

function start() {
    // Запрос количества просмотренных фильмов
    numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Преобразование строки в число

    // Проверка на пустую строку, отмену и нечисловое значение
    // numberOfFilm == "" - для пустой строки
    // numberOfFilm == null - для отмены
    // isNaN(numberOfFilm) - для нечислового значения

    while (numberOfFilm == "" || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Повторный запрос
    } // Цикл продолжается, пока ввод некорректен
}

start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        // Цикл для двух вопросов

        const a = prompt("Один из последних просмотренных фильмов?", ""); // Вопрос о названии фильма
        const b = prompt("На сколько оцените его?", ""); // Вопрос об оценке фильма

        // Проверка на пустую строку, отмену и длину строки
        //  a != null - для отмены
        //  a != "" - для пустой строки
        //  a.length < 50 - для длины строки
        //  b != null - для отмены
        //  b != "" - для пустой строки
        //  b.length < 10 - для длины строки

        if (
            a != null &&
            b != null &&
            a != "" &&
            b != "" &&
            a.length < 50 &&
            b.length <= 10
        ) {
            // Проверка на пустую строку, отмену и длину строки
            personalMovieDB.movies[a] = b; // Запись ответа в объект
            console.log("done"); // Успешное выполнение
        } else {
            // Если условия не выполняются
            console.log("error"); // Ошибка ввода
            i--; // Уменьшаем счетчик, чтобы повторить итерацию
        }
    }
}

rememberMyFilms();

function detectedPersonalLevel() {
    // Определение уровня зрителя
    // Проверка количества просмотренных фильмов и вывод соответствующего сообщения
    if (personalMovieDB.count <= 10) {
        // Если просмотрено 10 и менее фильмов
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        // Если просмотрено от 11 до 30 фильмов
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        // Если просмотрено более 30 фильмов
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}

detectedPersonalLevel();

function showMyDB(hidden) {
    // Функция для показа базы данных
    if (!hidden == false) {
        console.log(personalMovieDB);
    } else {
        console.log("Недостаточно прав");
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
        if (genre != null && genre != "" && genre.length < 50) {
            personalMovieDB.genres.push(a);
        } else {
            --i;
        }
    }
}

writeYourGenres();
