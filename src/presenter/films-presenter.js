import {render} from '../render.js';
import FilmCard from '../view/film-card-view.js';
import FilmSection from '../view/film-section-view.js';
import FilmListContainer from '../view/film-list-container-view.js';
import FilmList from '../view/film-list-view.js';
import ShowMoreButton from '../view/show-more-button-view.js';
import Sort from '../view/sort-view.js';
import Filters from '../view/filters-view.js';
import FilmListHeader from '../view/film-list-header.js';
import FilmPopup from '../view/film-popup-view.js';

export default class FilmsPresenter {
  #mainContainer = document.querySelector('.main');
  #filmSectionComponent = new FilmSection();
  #filmListContainerComponent = new FilmListContainer();
  #filmListComponent = new FilmList();
  #sortComponent = new Sort();
  #filtersComponent = new Filters();
  #filmListHeaderComponent = new FilmListHeader();
  #filmCards;

  constructor({ filmModel, commentModel }) {
    //this.#filmsContainer = filmsContainer;
    this.filmModel = filmModel;
    this.commentModel = commentModel;
    //this.popupPresenter = popupPresenter;
    /*this.comments = this.commentModel
      .getComments()
      .filter((comment) => this.film.comments.includes(comment.id));*/
  }

  init() {
    this.#filmCards = [...this.filmModel.films];

    render(this.#filtersComponent, this.#mainContainer);
    render(this.#sortComponent, this.#mainContainer);
    render(this.#filmSectionComponent, this.#mainContainer);
    render(this.#filmListComponent, this.#filmSectionComponent.element);
    render(this.#filmListHeaderComponent, this.#filmListComponent.element);
    render(
      this.#filmListContainerComponent,
      this.#filmListComponent.element
    );

    for (let i = 1; i < this.#filmCards.length; i++) {

      this.#renderFilmCard(i);
    }
    render(new ShowMoreButton(), this.#filmListComponent.element);
  }

  #renderFilmCard(i) {

    const filmCard = new FilmCard({film: this.#filmCards[i]});
    const filmPopup = new FilmPopup({film: this.#filmCards[i], comments: this.comments = this.commentModel
      .getComments()
      .filter((comment) => this.#filmCards[i].comments.includes(comment.id))});

    const filmCardLinks = filmCard.element.querySelector('a');
    const popupCloseBtn = filmPopup.element.querySelector('.film-details__close-btn');

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


