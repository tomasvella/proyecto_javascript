//Función que recorre el LocalStorage para revisar si hay películas cargadas, de ser así, manipula el DOM utilizando showMovie
//y así puede visualizarse dichas películas, permitiendo ser manípuladas nuevamente por los botones.
$(document).ready(function () {
  var movies = JSON.parse(localStorage.getItem('Movie'));
  if (movies) {
    movieDataBase = JSON.parse(localStorage.getItem('Movie'));
    showMovie(movieDataBase);
  }
  if (movieDataBase == 0) {
    $('#movie').children().remove();
    $('#movie').empty();
    $('#delete__last').css('display', 'none');
    $('#delete__all').css('display', 'none');
  }
});
