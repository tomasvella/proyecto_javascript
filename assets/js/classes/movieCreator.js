// Constructor del objeto, se le indican los parametros a utilizar para poder generar el objeto
// y a partir de ahí generar la funcionalidad.
class Movie {
  constructor(pTittle, pYear, pGenre, pProtagonist, pDirector, pSynopsis) {
    this.tittle = pTittle;
    this.year = pYear;
    this.genre = pGenre;
    this.protagonist = pProtagonist;
    this.director = pDirector;
    this.synopsis = pSynopsis;
  }
}
