import UserRankView from './view/user-rank-view.js';
import FiltersView from './view/filters-view.js';
import FilmPopupView from './view/film-popup-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';

const siteHeader = document.querySelector('.header');
const siteMain = document.querySelector('.main');

const filmsPresenter = new FilmsPresenter({filmsContainer: siteMain});

render(new UserRankView(), siteHeader);
render(new FiltersView(), siteMain);
render(new FilmPopupView(), document.body);

filmsPresenter.init();
