/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        // Запрос количества просмотренных фильмов
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Преобразование строки в число

        // Проверка на пустую строку, отмену и нечисловое значение
        // this.count == "" - для пустой строки
        // this.count == null - для отмены
        // isNaN(this.count) - для нечислового значения

        while (this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", ""); // Повторный запрос
        } // Цикл продолжается, пока ввод некорректен
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            // Цикл для двух вопросов

            const a = prompt(
                "Один из последних просмотренных фильмов?",
                ""
            ).trim(); // Вопрос о названии фильма
            const b = prompt("На сколько оцените его?", "").trim(); // Вопрос об оценке фильма

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
    },
    detectedPersonalLevel: function () {
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
    },
    showMyDB: function (hidden) {
        // Функция для показа базы данных
        if (!hidden == false) {
            console.log(personalMovieDB);
        } else {
            console.log("Недостаточно прав");
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {

            let genre =prompt(`Ваш любимый жанр под номером ${i + 1}`,"");

            if(genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }

        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}`);
        });
    },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectedPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
