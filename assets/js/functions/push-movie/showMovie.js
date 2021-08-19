// Función que permite mostrar en pantalla la película creada.
const showMovie = (movieDataBase) => {
  let viewMovie = `Película/s ingresada/s:
  <div class="movie__cards">`;

  movieDataBase.forEach(
    (movieName) =>
      (viewMovie += `<article class="card">
                        <h4 class="card_title">Título: ${movieName.tittle}</h4>
                        <p class="card_data">Año de estreno: ${movieName.year}</p>
                        <p class="card_data">Género: ${movieName.genre}</p>
                        <p class="card_data">Actor principal: ${movieName.protagonist}</p>
                        <p class="card_data">Director: ${movieName.director}</p>
                        <p class="card_data">Sinopsis: ${movieName.synopsis}.</p>
                    </article>`)
  );

  viewMovie += `</div>`;

  $('#movie').html(viewMovie);
  $('#delete__last').fadeIn('slow');
  $('#delete__all').fadeIn('slow');
};
