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
  #filmSectionComponent = new FilmSectionView();
  #filmListContainerComponent = new FilmListContainerView({film: this.filmCards});
  #filmListComponent = new FilmListView();
  #sortComponent = new SortView();
  #filtersComponent = new FiltersView();
  #filmListHeaderComponent = new FilmListHeaderView();
  #filmsContainer;
  #filmCards;

  constructor({ filmsContainer, filmModel, popupPresenter }) {
    this.#filmsContainer = filmsContainer;
    this.filmModel = filmModel;
    this.popupPresenter = popupPresenter;
  }

  init() {
    this.#filmCards = [...this.filmModel.films];

    render(this.#filtersComponent, this.#filmsContainer);
    render(this.#sortComponent, this.#filmsContainer);
    render(this.#filmSectionComponent, this.#filmsContainer);
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
    const filmPopup = new FilmPopupView({film: this.#filmCards[i], comments: [i]});

    const filmCardLinks = filmCard.element.querySelector('a');
    const popupCloseBtn = filmPopup.element.querySelector('.film-details__close-btn');

    filmCardLinks.addEventListener('click', () => {
      console.log('show popup')
      this.popupPresenter.showPopup(filmPopup);
      console.log(this.popupPresenter)
    });

    popupCloseBtn.addEventListener('click', () => {
      console.log('close popup!')
      filmPopup.removeElement();
    });

    render(filmCard, this.#filmListContainerComponent.element);
  }

}


