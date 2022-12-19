import {render} from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmSectionView from '../view/film-section-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmListView from '../view/film-list-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';


export default class FilmsPresenter {
  filmComponent = new FilmSectionView();
  filmListContainerComponent = new FilmListContainerView({film: this.Films});
  filmListComponent = new FilmListView();
  sortComponent = new SortView();
  filtersViewComponent = new FiltersView();

  constructor({ filmsContainer, filmModel }) {
    this.filmsContainer = filmsContainer;
    this.filmModel = filmModel;
  }

  init() {
    this.Films = [...this.filmModel.getFilms()];

    render(this.filtersViewComponent, this.filmsContainer);
    render(this.sortComponent, this.filmsContainer);
    render(this.filmComponent, this.filmsContainer);
    render(this.filmListComponent, this.filmComponent.getElement());
    render(
      this.filmListContainerComponent,
      this.filmListComponent.getElement()
    );

    for (let i = 1; i < this.Films.length; i++) {
      render(new FilmCardView({film: this.Films[i]}), this.filmListContainerComponent.getElement());
    }
    render(new ShowMoreButtonView(), this.filmListContainerComponent.getElement());
  }
}


