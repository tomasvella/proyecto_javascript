// Función que permite crear la película con los valores capturados de los inputs,
// utilizando la clase Movie, posterior a esto se pushea al array para poder tenerla como un objeto
// y poder visualizarla en el HTML.
const createMovieRequest = () => {
  let tittle = movieTittle.value;
  let year = movieYear.value;
  let genre = movieGenre.value;
  let protagonist = movieProtagonist.value;
  let director = movieDirector.value;
  let synopsis = movieSynopsis.value;

  if (
    tittle == '' &&
    year == '' &&
    genre == '' &&
    protagonist == '' &&
    director == '' &&
    synopsis == ''
  ) {
    $('#movie__form').submit(function (event) {
      event.preventDefault();
    });
  } else {
    let createMovie = new Movie(
      tittle,
      year,
      genre,
      protagonist,
      director,
      synopsis
    );

    movieDataBase.push(createMovie);

    showMovie();

    $('#movie__form')[0].reset();
  }
};
