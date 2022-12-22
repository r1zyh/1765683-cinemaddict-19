import {render} from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmSectionView from '../view/film-section-view.js';
import FilmListContainerView from '../view/film-list-container-view.js';
import FilmListView from '../view/film-list-view.js';
import ShowMoreButtonView from '../view/show-more-button-view.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import FilmListHeaderView from '../view/film-list-header.js';

export default class FilmsPresenter {
  filmComponent = new FilmSectionView();
  filmListContainerComponent = new FilmListContainerView({film: this.Films});
  filmListComponent = new FilmListView();
  sortComponent = new SortView();
  filtersViewComponent = new FiltersView();
  filmListHeaderComponent = new FilmListHeaderView();

  constructor({ filmsContainer, filmModel }) {
    this.filmsContainer = filmsContainer;
    this.filmModel = filmModel;
  }

  init() {
    this.Films = [...this.filmModel.Films];

    render(this.filtersViewComponent, this.filmsContainer);
    render(this.sortComponent, this.filmsContainer);
    render(this.filmComponent, this.filmsContainer);
    render(this.filmListComponent, this.filmComponent.element);
    render(this.filmListHeaderComponent, this.filmListComponent.element);
    render(
      this.filmListContainerComponent,
      this.filmListComponent.element
    );

    for (let i = 1; i < this.Films.length; i++) {
      render(new FilmCardView({film: this.Films[i]}), this.filmListContainerComponent.element);
    }
    render(new ShowMoreButtonView(), this.filmListComponent.element);
  }
}


