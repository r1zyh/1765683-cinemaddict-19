import AbstractView from '../framework/view/abstract-view.js';

function createEmptyMessageTemplate() {
  return `
    <h2 class="film-empty">
      There are no movies in our database
    </h2>
  `;
}

export default class EmptyListMessage extends AbstractView {
  get template() {
    return createEmptyMessageTemplate();
  }
}
