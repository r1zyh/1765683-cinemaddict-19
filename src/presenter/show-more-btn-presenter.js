import ShowMoreButton from '../view/show-more-button-view';
import { render } from '../framework/render';

const FILM_COUNT_PER_STEP = 5;

export default class ShowMoreButtonPresenter {
  #showMoreBtn = null;
  #page = 1;

  #films = [];
  #filmListComponent = null;
  #renderFilmCard = null;

  constructor({ films, filmListComponent, renderFilmCard }) {
    this.#films = films;
    this.#filmListComponent = filmListComponent;
    this.#renderFilmCard = renderFilmCard;
  }

  init() {
    this.#showMoreBtn = new ShowMoreButton({ onClick: this.#showMoreBtnClickHandler });
    render(this.#showMoreBtn, this.#filmListComponent.element);
  }

  #showMoreBtnClickHandler = () => {
    this.#page += 1;
    const start = FILM_COUNT_PER_STEP * (this.#page - 1);
    const end = FILM_COUNT_PER_STEP * this.#page;

    if (FILM_COUNT_PER_STEP * this.#page >= this.#films.length) {
      for (let i = start; i < this.#films.length; i++) {
        this.#renderFilmCard(i);
      }
      return true;
    }

    for (let i = start; i < end; i++) {
      this.#renderFilmCard(i);
    }

    return false;
  };
}
