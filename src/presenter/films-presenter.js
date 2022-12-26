import {render} from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmSectionView from '../view/film-section-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmListView from '../view/film-list-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import FilmListHeaderView from '../view/film-list-header.js';
import FilmPopupView from '../view/film-popup-view.js';

export default class FilmsPresenter {
  #container = document.querySelector('.main')
  #filmSectionComponent = new FilmSectionView();
  #filmListContainerComponent = new FilmListContainerView({film: this.filmCards});
  #filmListComponent = new FilmListView();
  #sortComponent = new SortView();
  #filtersComponent = new FiltersView();
  #filmListHeaderComponent = new FilmListHeaderView();
  #filmsContainer;
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

    render(this.#filtersComponent, this.#container);
    render(this.#sortComponent, this.#container);
    render(this.#filmSectionComponent, this.#container);
    render(this.#filmListComponent, this.#filmSectionComponent.element);
    render(this.#filmListHeaderComponent, this.#filmListComponent.element);
    render(
      this.#filmListContainerComponent,
      this.#filmListComponent.element
    );

    for (let i = 1; i < this.#filmCards.length; i++) {

      this.#renderFilmCard(i);
    }
    render(new ShowMoreButtonView(), this.#filmListComponent.element);
  }

  #renderFilmCard(i) {

    const filmCard = new FilmCardView({film: this.#filmCards[i]});
    const filmPopup = new FilmPopupView({film: this.#filmCards[i], comments: this.comments});

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


