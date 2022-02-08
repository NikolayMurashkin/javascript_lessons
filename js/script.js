"use strict";
/*const movies = () => {
	let numberOfFilms;

	function start() {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
		while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
		}
	}
	start();

	const personalMovieDB = {
		count: numberOfFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: true,
	};

	function showMyDB() {
		if (personalMovieDB.privat !== false) {
			console.log(personalMovieDB);
		}
	}
	showMyDB();

	function writeYourGenres() {
		for (let i = 1; i < 4; i++) {
			personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
		}
	}
	writeYourGenres();

	function remebmerMyFilms() {
		let i = 0;
		do {
			let a = prompt('Один из последних просмотренных фильмов?', '');
			let b = +prompt('На сколько оцените его?', '');
			if (a.length <= 50 && b != 0 && a != null && a.length != 0) {
				personalMovieDB.movies[a] = b;
				i++;
			}
		} while (i < 2);
	}
	remebmerMyFilms();

	function detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
			alert('Вы классический зритель');
		} else if (personalMovieDB.count > 30) {
			alert('Вы киноман!');
		} else {
			alert('Ошибка');
		}
	}
	detectPersonalLevel();

};

movies();
*/

const options = {
	name: 'test',
	width: 1024,
	height: 1024,
	colors: {
		border: 'black',
		bg: 'red',
	},
	makeTest: function () {
		console.log('test');
	}
};

options.makeTest();
// console.log(Object.keys(options).length);

const {border, bg} = options.colors;
console.log(border);



// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойство ${key} имеет значение ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);
// console.log(options['colors']['border']);

