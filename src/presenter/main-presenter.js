import FilmsPresenter from '../presenter/films-presenter.js';

const siteMain = document.querySelector('.main');
const filmsPresenter = new FilmsPresenter({ filmsContainer: siteMain });

filmsPresenter.init();
