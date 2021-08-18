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
