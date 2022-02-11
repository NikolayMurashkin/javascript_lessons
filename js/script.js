"use strict";
const movies = () => {
	// let numberOfFilms;

	// function start() {
	// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
	// 		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	// 	}
	// }
	// start();



	/*function remebmerMyFilms() {
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
	*/
};

movies();
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start() {
		this.count = +prompt('Сколько фильмов вы уже посмотрели?');
		while (this.count == '' || this.count == null || isNaN(this.count)) {
			this.count = +prompt('Сколько фильмов вы уже посмотрели?');
		}
	},
	toggleVisibleMyDb() {
		if (this.privat) {
			this.privat = false;
		} else {
			this.privat = true;
		}
	},
	writeYourGenres() {
		for (let i = 1; i < 4; i++) {
			let l = 0;
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			while (l <= 0) {
				if (genre !== null && genre.length > 0) {
					this.genres.push(genre);
					l++;
				} else {
					// alert('Вы должны что-нибудь ввести!');
					genre = prompt(`Ваш любимый жанр под номером ${i}`);
				}
			}
		}
		this.genres.forEach((genre, i) => {
			console.log(`Любимый жанр #${i + 1} - это ${genre}`);
		});
	},
	remebmerMyFilms() {
		let i = 0;
		do {
			let a = prompt('Один из последних просмотренных фильмов?', '');
			let b = +prompt('На сколько оцените его?', '');
			if (a.length <= 50 && b != 0 && a != null && a.length != 0) {
				this.movies[a] = b;
				i++;
			}
		} while (i < 2);
	},
	detectPersonalLevel() {
		if (this.count < 10) {
			alert('Просмотрено довольно мало фильмов');
		} else if (this.count >= 10 && this.count <= 30) {
			alert('Вы классический зритель');
		} else if (this.count > 30) {
			alert('Вы киноман!');
		} else {
			alert('Ошибка');
		}
	},
	showMyDB(hidden) {
		if (!hidden) {
			console.log(this);
		}
	},
};
personalMovieDB.toggleVisibleMyDb();
personalMovieDB.showMyDB(personalMovieDB.privat);
