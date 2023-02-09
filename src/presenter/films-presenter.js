import { render, remove } from '../framework/render.js';
import { sortDate, sortRating } from '../util.js';
import FilmSection from '../view/film-section-view.js';
import FilmListContainer from '../view/film-list-container-view.js';
import FilmList from '../view/film-list-view.js';
import Sort from '../view/sort-view.js';
import Filters from '../view/filters-view.js';
import FilmListHeader from '../view/film-list-header.js';
import ShowMoreButton from '../view/show-more-button-view.js';
import EmptyListMessage from '../view/empty-film-list-message.js';
import FilmPresenter from './film-presenter.js';
import FilmSectionPresenter from './film-section-presenter.js';
import { SortType, UpdateType, UserAction } from '../mock/const.js';

const FILM_COUNT_PER_STEP = 5;
export default class FilmsPresenter {
  #mainContainer = document.querySelector('.main');
  #filmSectionComponent = new FilmSection();
  #filmListContainerComponent = new FilmListContainer();
  #filmListComponent = new FilmList();
  #sortComponent = null;
  #filmListHeaderComponent = new FilmListHeader();
  #emptyMessage = new EmptyListMessage();
  #filtersComponent;
  #filmPresenter = new Map();
  #showMoreBtn;
  #currentSortType = SortType.DEFAULT;
  #sourcedFilms = [];
  #renderedFilmCount = FILM_COUNT_PER_STEP;

  constructor({ filmModel, commentModel, filters }) {
    this.filmModel = filmModel;
    this.commentModel = commentModel;
    this.filters = filters;

    this.filmModel.addObserver(this.#handleModelEvent);
  }

  get films() {
    switch (this.#currentSortType) {
      case SortType.BY_DATE:
        return [...this.filmModel.films].sort(sortDate);

      case SortType.BY_RATING:
        return [...this.filmModel.films].sort(sortRating);

      case SortType.DEFAULT:
        return ([...this.filmModel.films] = [...this.#sourcedFilms]);
    }
    return this.filmModel.films;
  }

  init() {
    this.#renderPage();
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_FILM:
        this.filmModel.updateFilm(updateType, update);
        break;
      case UserAction.ADD_FILM:
        this.filmModel.addFilm(updateType, update);
        break;
      case UserAction.DELETE_FILM:
        this.filmModel.deleteFilm(updateType, update);
        break;
    }
  };

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        // - обновить часть списка (например, когда поменялось описание)
        this.#filmPresenter.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearFilmsList();
        this.#renderPage();
        // - обновить список (например, когда задача ушла в архив)
        break;
      case UpdateType.MAJOR:
        // - обновить всю доску (например, при переключении фильтра)
        this.#clearFilmsList();
        this.#renderPage();
        break;
    }
  };

  #renderSort() {
    this.#sortComponent = new Sort({
      currentSortType: this.#currentSortType,
      onSortTypeChange: this.#handleSortTypeChange,
    });
    render(this.#sortComponent, this.#mainContainer);
  }

  #renderEmptyListMessage() {
    const filmCount = this.films.length;
    if (filmCount === 0) {
      render(this.#emptyMessage, this.#filmListContainerComponent.element);
    }
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#currentSortType = sortType;
    this.#clearFilmsList({ resetRenderedFilmCount: true });
    this.#renderShowMoreBtn();
    this.#renderPage();
  };

  #renderFilmSection() {
    const filmSectionPresenter = new FilmSectionPresenter({
      filmSectionComponent: this.#filmSectionComponent,
      filmSectionContainer: this.#mainContainer,
    });
    filmSectionPresenter.init();
  }

  #renderFilmList() {
    const filmCount = this.films.length;
    const films = this.films.slice(0, Math.min(filmCount, FILM_COUNT_PER_STEP));

    render(this.#filmListComponent, this.#filmSectionComponent.element);
    render(this.#filmListHeaderComponent, this.#filmListComponent.element);
    render(this.#filmListContainerComponent, this.#filmListComponent.element);

    this.#renderFilms(films);

    if (this.filmCount > FILM_COUNT_PER_STEP) {
      this.#renderShowMoreBtn();
    }
  }

  #renderFilms(films) {
    films.forEach((film) => this.#renderFilm(film));
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
    const filmCount = this.films.length;
    const newRenderedFilmCount = Math.min(filmCount, this.#renderedFilmCount + FILM_COUNT_PER_STEP);
    const films = this.films.slice(this.#renderedFilmCount, newRenderedFilmCount);

    this.#renderFilms(films);
    this.#renderedFilmCount = newRenderedFilmCount;

    if (this.#renderedFilmCount >= filmCount) {
      remove(this.#showMoreBtn);
    }
  };

  #renderFilm = (film) => {
    const filmPresenter = new FilmPresenter({
      commentsModel: this.commentModel,
      filmListContainer: this.#filmListContainerComponent,
      onFilmChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });
    filmPresenter.init(film);
    this.#filmPresenter.set(film.id, filmPresenter);
  };

  /*
  #handleFilmChange = (updatedFilm) => {
    this.#filmPresenter.get(updatedFilm.id).init(updatedFilm);
  };
*/

  #handleModeChange = () => {
    this.#filmPresenter.forEach((presenter) => presenter.resetView());
  };

  #clearFilmsList({ resetRenderedFilmCount = false, resetSortType = false } = {}) {
    const filmCount = this.films.length;

    this.#filmPresenter.forEach((presenter) => presenter.destroy());
    this.#filmPresenter.clear();

    remove(this.#sortComponent);
    remove(this.#emptyMessage);
    remove(this.#showMoreBtn);

    if (resetRenderedFilmCount) {
      this.#renderedFilmCount = FILM_COUNT_PER_STEP;
    } else {
      // На случай, если перерисовка доски вызвана
      // уменьшением количества задач (например, удаление или перенос в архив)
      // нужно скорректировать число показанных задач
      this.#renderedFilmCount = Math.min(filmCount, this.#renderedFilmCount);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DEFAULT;
    }
  }

  #renderPage() {
    const films = this.films;
    const filmCount = films.length;

    this.#renderFilters(this.filters);
    this.#renderSort();
    this.#renderFilmSection();
    this.#renderFilmList();
    this.#renderEmptyListMessage();

    this.#renderFilm(films.slice(0, Math.min(filmCount, this.#renderedFilmCount)));

    if (filmCount > this.#renderedFilmCount) {
      this.#renderShowMoreBtn();
    }
  }
}
