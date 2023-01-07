import { createElement } from '../render.js';

function createEmptyMessageTemplate() {
  return `
    <h2 class="film-empty">
      There are no movies in our database
    </h2>
  `;
}

export default class EmptyListMessage {
  #element = null;

  get template() {
    return createEmptyMessageTemplate();
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
