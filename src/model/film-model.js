import { createFilm } from '../mock/film.js';
import { getRandomArrayElement } from '../util.js';

const FILMS_LIST_LENGTH = 22;
export default class FilmsModel {
  #films = Array.from({ length: FILMS_LIST_LENGTH }, createFilm);

  get films() {
    return this.#films;
  }

  get FilmsForExtraMode() {
    return [ getRandomArrayElement(this.#films), getRandomArrayElement(this.#films)];
  }

  get FilmForPopup() {
    return getRandomArrayElement(this.#films);

  }
}
