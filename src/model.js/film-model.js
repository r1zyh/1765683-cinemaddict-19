import { createFilm} from '../mocks/film.js';
import { getRandomElementArray } from '../utils.js';
import { FILMS_LIST_LENGTH } from '../mock.js/const.js';

export default class FilmsModel {
  films = Array.from({ length: FILMS_LIST_LENGTH }, createFilm);

  getFilms() {
    return this.films;
  }

  getFilmsForExtraMode() {
    return [getRandomElementArray(this.films), getRandomElementArray(this.films)];
  }

  getFilmForPopup() {
    return getRandomElementArray(this.films);
  }
}
