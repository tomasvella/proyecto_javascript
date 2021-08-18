const movieLoader = () => {
  let movieView = '';
  let movieList = JSON.parse(localStorage.getItem(keyLocalStorageMovies));

  $.get('../pages/movieDB.html', function (html) {
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

$.getJSON('../db/movies.json', function (datos) {
  movies = datos;

  if (localStorage.getItem('movies') == null)
    localStorage.setItem(keyLocalStorageMovies, JSON.stringify(movies));

  movieLoader();
});
