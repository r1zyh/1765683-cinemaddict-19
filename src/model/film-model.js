import { createFilm } from '../mock/film.js';
import { getRandomArrayElement } from '../util.js';

const FILMS_LIST_LENGTH = 6;
export default class FilmsModel {
  films = Array.from({ length: FILMS_LIST_LENGTH }, createFilm);

  getFilms() {
    return this.films;
  }

  getFilmsForExtraMode() {
    return [ getRandomArrayElement(this.films), getRandomArrayElement(this.films)];
  }

  getFilmForPopup() {
    return getRandomArrayElement(this.films);
  }
}
