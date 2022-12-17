import { createElement } from '../render.js';

function createFilmListContainerTemplate() {
  return '<div class="film-details__bottom-container"></div>';
}

export default class FilmListContainerView {
  getTemplate() {
    return createFilmListContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
