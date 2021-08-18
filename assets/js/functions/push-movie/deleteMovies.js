//Funciones para manipular el modal, esto permite que el cliente pueda tener una instancia más y poder arrepentirse de borrar
//una película.
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

//Función que permite borrar la última posición del array y además actualizar el LocalStorage. Es llamada dentro de
//deleteCreatedMovies.
function popArrayAndUpdateLS() {
  movieDataBase.pop();
  localStorage.setItem('Movie', JSON.stringify(movieDataBase));
}

//Función para borrar la ultima pelicula creada, la funcion es capaz de detectar si la pelicula es borrada es la unica
//cargada para eliminar una porcion de HTML que contiene "Peliculas ingresadas".
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

//Función que borra todas las películas, limpia el array y el LocalStorage
const deleteAllMovies = () => {
  movieDataBase = [];
  localStorage.clear();
  $('#movie').children().remove();
  $('#movie').empty();
  $('#modal__allMovies').fadeOut('slow');
  $('#delete__last').fadeOut('slow');
  $('#delete__all').fadeOut('slow');
};
