import AbstractView from '../framework/view/abstract-view.js';

function createFilmListTemplate() {
  return `
  <section class="films-list"></section>
  `;
}

export default class FilmList extends AbstractView {
  get template() {
    return createFilmListTemplate();
  }
}
