//Variables globales para armar el listado de películas y poder capturarlas con los inputs.
var movieDataBase = [];
var movieTittle = $('#tittle');
var movieYear = $('#year');
var movieGenre = $('#genre');
var movieProtagonist = $('#protagonist');
var movieDirector = $('#director');
var movieSynopsis = $('#synopsis');
const keyLocalStorageMovies = 'movies';

$.getJSON('../db/movies.json', function (datos) {
  movies = datos;

  if (localStorage.getItem('movies') == null)
    localStorage.setItem(keyLocalStorageMovies, JSON.stringify(movies));

  movieLoader();
});
