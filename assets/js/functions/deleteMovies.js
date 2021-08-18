const modalDeleteMovies = () => {
  $('#modal__lastMovie').fadeIn('slow');
};

const modalDeleteAllMovies = () => {
  $('#modal__allMovies').fadeIn('slow');
};

const cancelModalDeleteMovies = () => {
  $('#modal__lastMovie').fadeOut('slow');
};

const cancelModalDeleteAllMovies = () => {
  $('#modal__allMovies').fadeOut('slow');
};

function popArrayAndUpdateLS() {
  movieDataBase.pop();
  localStorage.setItem('Movie', JSON.stringify(movieDataBase));
}

const deleteCreatedMovies = () => {
  if (movieDataBase.length > 1) {
    popArrayAndUpdateLS();

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
  } else {
    if (movieDataBase.length === 1) {
      popArrayAndUpdateLS();
      $('#movie').remove();
      $('#delete__last').fadeOut('slow');
      $('#delete__all').fadeOut('slow');
    }
  }

  $('#modal__lastMovie').fadeOut('slow');
};

const deleteAllMovies = () => {
  movieDataBase = [];
  localStorage.clear();
  $('#movie').children().remove();
  $('#movie').empty();
  $('#modal__allMovies').fadeOut('slow');
  $('#delete__last').fadeOut('slow');
  $('#delete__all').fadeOut('slow');
};
