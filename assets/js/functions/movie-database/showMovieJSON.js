//Constante para poder crear una clave y utilizarla posteriormente dentro del LocalStorage.
const keyLocalStorageMovies = 'moviesJSON';

//Función que permite ubicar el archivo JSON y parsearlo a un array de objetivos. El mismo es recorrido y mostrado en pantalla
//manipulando elementos de un HTML creado con un formato y estilado determinado.
const movieLoader = () => {
  let movieView = '';
  let movieList = JSON.parse(localStorage.getItem(keyLocalStorageMovies));

  $.get('../pages/movie-database/movieDB.html', function (html) {
    movieList.forEach((m) => {
      let view = html;
      view = view.replaceAll('[title]', m.Title);
      view = view.replaceAll('[year]', m.Year);
      view = view.replaceAll('[genre]', m.Genre);
      view = view.replaceAll('[protagonist]', m.Protagonist);
      view = view.replaceAll('[director]', m.Director);
      view = view.replaceAll('[synopsis]', m.Synopsis);
      view = view.replaceAll('[image]', m.Poster);

      movieView += view;
    });

    $('#cards').html(movieView);
  });
};

//Aca es cuando se ejecuta la función ya que es asincrónico.
$.getJSON('../db/movies.json', function (datos) {
  movies = datos;

  if (localStorage.getItem('moviesJSON') == null)
    localStorage.setItem(keyLocalStorageMovies, JSON.stringify(movies));

  movieLoader();
});
