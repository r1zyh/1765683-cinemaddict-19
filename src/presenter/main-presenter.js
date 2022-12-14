import FilmsPresenter from '../presenter/films-presenter.js';
import FilmsModel from '../model/film-model.js';

const siteMain = document.querySelector('.main');
const filmModel = new FilmsModel();

const filmsPresenter = new FilmsPresenter({ filmsContainer: siteMain, filmModel });

filmsPresenter.init();
