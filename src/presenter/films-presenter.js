import { render } from '../render.js';
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
  #filtersComponent = new Filters();
  #filmListHeaderComponent = new FilmListHeader();
  #filmCards;
  #showMoreBtn = new ShowMoreButton();
  #emptyMessage = new EmptyListMessage();
  #page = 1;

  constructor({ filmModel, commentModel }) {
    this.filmModel = filmModel;
    this.commentModel = commentModel;
  }

  init() {
    this.#filmCards = [...this.filmModel.films];

    render(this.#filtersComponent, this.#mainContainer);
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
      render(this.#showMoreBtn, this.#filmListComponent.element);
      this.#showMoreBtn.element.addEventListener('click', this.#showMoreBtnClickHandler);
    }
  }

  #showMoreBtnClickHandler = (evt) => {
    evt.preventDefault();

    this.#page += 1;
    const start = FILM_COUNT_PER_STEP * (this.#page - 1);
    const end = FILM_COUNT_PER_STEP * this.#page;

    if (FILM_COUNT_PER_STEP * this.#page >= this.#filmCards.length) {
      this.#showMoreBtn.element.removeEventListener('click', this.#showMoreBtnClickHandler);
      this.#showMoreBtn.element.remove();
      this.#showMoreBtn.removeElement();

      for (let i = start; i < this.#filmCards.length; i++) {
        this.#renderFilmCard(i);
      }
      return;
    }

    for (let i = start; i < end; i++) {
      this.#renderFilmCard(i);
    }
  };

  #renderFilmCard(i) {
    const comments = this.commentModel
      .getComments()
      .filter((comment) => this.#filmCards[i].comments.includes(comment.id));

    const filmCard = new FilmCard({ film: this.#filmCards[i] });
    const filmPopup = new FilmPopup({ film: this.#filmCards[i] });

    const filmCardLinks = filmCard.element.querySelector('a');
    const popupCloseBtn = filmPopup.element.querySelector('.film-details__close-btn');

    if (Array.isArray(comments)) {
      comments.forEach((comment) => {
        render(new FilmPopupComment({ comments: comment }), filmPopup.commentsContainer);
      });
    }

    const showPopup = () => {
      document.body.appendChild(filmPopup.element);
      document.body.classList.add('hide-overflow');
    };

    const closePopup = () => {
      document.body.removeChild(filmPopup.element);
      document.body.classList.remove('hide-overflow');
    };

    const escKeyDownHandler = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        closePopup();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    filmCardLinks.addEventListener('click', () => {
      showPopup();
      document.addEventListener('keydown', escKeyDownHandler);
    });

    popupCloseBtn.addEventListener('click', () => {
      closePopup();
      document.removeEventListener('keydown', escKeyDownHandler);
    });

    render(filmCard, this.#filmListContainerComponent.element);
  }
}
