import { render } from '../framework/render.js';
import FilmCard from '../view/film-card-view.js';
import FilmSection from '../view/film-section-view.js';
import FilmListContainer from '../view/film-list-container-view.js';
import FilmList from '../view/film-list-view.js';
import ShowMoreButton from '../view/show-more-button-view.js';
import Sort from '../view/sort-view.js';
import Filters from '../view/filters-view.js';
import FilmListHeader from '../view/film-list-header.js';
import FilmPopup from '../view/film-popup-view.js';
import EmptyListMessage from '../view/empty-film-list-message.js';
import FilmPopupComment from '../view/film-comment-view.js';

const FILM_COUNT_PER_STEP = 5;
export default class FilmsPresenter {
  #mainContainer = document.querySelector('.main');
  #filmSectionComponent = new FilmSection();
  #filmListContainerComponent = new FilmListContainer();
  #filmListComponent = new FilmList();
  #sortComponent = new Sort();
  #filmListHeaderComponent = new FilmListHeader();
  #filmCards;
  #emptyMessage = new EmptyListMessage();
  #page = 1;
  #filtersComponent;
  #filmPopup;
  #filmCard;
  #showMoreBtn;

  constructor({ filmModel, commentModel, filters }) {
    this.filmModel = filmModel;
    this.commentModel = commentModel;
    this.filters = filters;
  }

  init() {
    this.#filmCards = [...this.filmModel.films];

    this.#renderFilters(this.filters);
    render(this.#sortComponent, this.#mainContainer);
    render(this.#filmSectionComponent, this.#mainContainer);
    render(this.#filmListComponent, this.#filmSectionComponent.element);
    render(this.#filmListHeaderComponent, this.#filmListComponent.element);
    render(this.#filmListContainerComponent, this.#filmListComponent.element);

    if (this.#filmCards.length === 0) {
      render(this.#emptyMessage, this.#filmListContainerComponent.element);

      return;
    }

    const initLength =
      this.#filmCards.length > FILM_COUNT_PER_STEP ? FILM_COUNT_PER_STEP : this.#filmCards.length;

    for (let i = 1; i <= initLength; i++) {
      this.#renderFilmCard(i);
    }

    if (this.#filmCards.length > FILM_COUNT_PER_STEP) {
      this.#renderShowMoreBtn();
    }
  }

  #renderFilters(filters) {
    this.#filtersComponent = new Filters({ filters });
    render(this.#filtersComponent, this.#mainContainer);
  }

  #renderShowMoreBtn() {
    this.#showMoreBtn = new ShowMoreButton({ onClick: this.#showMoreBtnClickHandler });
    render(this.#showMoreBtn, this.#filmListComponent.element);
  }

  #showMoreBtnClickHandler = () => {
    this.#page += 1;
    const start = FILM_COUNT_PER_STEP * (this.#page - 1);
    const end = FILM_COUNT_PER_STEP * this.#page;

    if (FILM_COUNT_PER_STEP * this.#page >= this.#filmCards.length) {
      for (let i = start; i < this.#filmCards.length; i++) {
        this.#renderFilmCard(i);
      }
      return true;
    }

    for (let i = start; i < end; i++) {
      this.#renderFilmCard(i);
    }

    return false;
  };

  #renderFilmCard(i) {
    const comments = this.commentModel
      .getComments()
      .filter((comment) => this.#filmCards[i].comments.includes(comment.id));

    this.#filmCard = new FilmCard({ film: this.#filmCards[i], onClick: this.showPopup });
    this.#filmPopup = new FilmPopup({ film: this.#filmCards[i], onCloseClick: this.closePopup });

    if (Array.isArray(comments)) {
      comments.forEach((comment) => {
        render(new FilmPopupComment({ comments: comment }), this.#filmPopup.commentsContainer);
      });
    }

    render(this.#filmCard, this.#filmListContainerComponent.element);
  }

  escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.closePopup();
    }
  };

  showPopup = () => {
    document.body.appendChild(this.#filmPopup.element);
    document.body.classList.add('hide-overflow');
    document.addEventListener('keydown', this.escKeyDownHandler);
  };

  closePopup = () => {
    document.body.removeChild(this.#filmPopup.element);
    document.body.classList.remove('hide-overflow');
    document.removeEventListener('keydown', this.escKeyDownHandler);
  };
}
