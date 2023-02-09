import Observable from '../framework/observable.js';
import { createFilm } from '../mock/film.js';
import { getRandomArrayElement } from '../util.js';

const FILMS_LIST_LENGTH = 22;
export default class FilmsModel extends Observable {
  #films = Array.from({ length: FILMS_LIST_LENGTH }, createFilm);

  get films() {
    return this.#films;
  }

  updateFilm(updateType, update) {
    const index = this.#films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting film');
    }

    this.#films = [
      ...this.#films.slice(0, index),
      update,
      ...this.#films.slice(index + 1),
    ];

    this._notify(updateType, update);
  }

  addFilm(updateType, update) {
    this.#films = [
      update,
      ...this.#films,
    ];

    this._notify(updateType, update);
  }

  deleteFilm(updateType, update) {
    const index = this.#films.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t delete unexisting film');
    }

    this.#films = [
      ...this.#films.slice(0, index),
      ...this.#films.slice(index + 1),
    ];

    this._notify(updateType);
  }

  get FilmsForExtraMode() {
    return [getRandomArrayElement(this.#films), getRandomArrayElement(this.#films)];
  }

  get FilmForPopup() {
    return getRandomArrayElement(this.#films);
  }
}
