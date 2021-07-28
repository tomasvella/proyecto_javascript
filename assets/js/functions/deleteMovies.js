const deleteCreatedMovies = () => {
  if (movieDataBase.length > 0) {
    movieDataBase.pop();

    let viewMovie = `Película/s ingresada/s: <ul>`;

    movieDataBase.forEach(
      (movieName) =>
        (viewMovie += `<li>Título: ${movieName.tittle}.</li>
    <li>Año de estreno: ${movieName.year}.</li>
    <li>Género: ${movieName.genre}.</li>
    <li>Actor principal: ${movieName.protagonist}.</li>
    <li>Director: ${movieName.director}.</li>
    <li>Sinopsis: ${movieName.synopsis}.</li>
    <br>`)
    );

    viewMovie += `</ul>`;

    $('#movie').html(viewMovie);
  } else {
    if (movieDataBase.length == 0) {
      $('#movie').empty();
    }
  }
};

const deleteAllMovies = () => {
  movieDataBase = [];
  $('#movie').children().remove();
  $('#movie').empty();
};
