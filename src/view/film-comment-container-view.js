import { createElement } from '../render.js';

function createFilmListContainerTemplate() {
  return '<div class="film-details__bottom-container"></div>';
}

export default class FilmCommentContainer {
  #element = null;

  get template() {
    return createFilmListContainerTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
