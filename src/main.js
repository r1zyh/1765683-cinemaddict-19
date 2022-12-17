import FooterPresenter from './presenter/footer-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilmsModel from '../src/model/film-model.js';
import PopupPresenter from './presenter/popup-presenter.js';
import FilmsPresenter from './presenter/films-presenter.js';

const siteMain = document.querySelector('.main');
const filmModel = new FilmsModel();

const filmsPresenter = new FilmsPresenter({ filmsContainer: siteMain, filmModel });
const headerPresenter = new HeaderPresenter;
const footerPresenter = new FooterPresenter;
const popupPresenter = new PopupPresenter;

headerPresenter.init();
filmsPresenter.init();
footerPresenter.init();
popupPresenter.init();
