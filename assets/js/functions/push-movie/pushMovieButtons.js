//Boton enviar
$('#submit').click(createMovieRequest);

//Apertura de modal para borrar última película cargada, posibilitando a arrepentirse del hecho
$('#delete__last').click(modalDeleteMovies);
$('#modal__last__YES').click(deleteCreatedMovies);
$('#modal__last__NO').click(cancelModalDeleteMovies);

//Borrar todas las películas cargadas
$('#delete__all').click(modalDeleteAllMovies);
$('#modal__all__YES').click(deleteAllMovies);
$('#modal__all__NO').click(cancelModalDeleteAllMovies);
