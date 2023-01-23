import AbstractView from '../framework/view/abstract-view.js';

function createFilmListContainerTemplate() {
  return '<div class="film-details__bottom-container"></div>';
}

export default class FilmCommentContainer extends AbstractView {
  get template() {
    return createFilmListContainerTemplate();
  }
}
