// Función que permite mostrar en pantalla la película creada.

const showMovie = () => {
  var viewMovie = `Película/s ingresada/s: <ul>`;

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
};
