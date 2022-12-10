import UserRankView from './view/user-rank-view.js';
import FooterStatisticsView from './view/footer-statistics-view';
import FilmPopupView from './view/film-popup-view.js';
import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';


const siteHeader = document.querySelector('.header');
const siteMain = document.querySelector('.main');
const siteFooter = document.querySelector('.footer');

const popupComponent = new FilmPopupView();

const filmsPresenter = new FilmsPresenter({filmsContainer: siteMain});

render(new UserRankView(), siteHeader);
render(new FooterStatisticsView(), siteFooter);
render(popupComponent, document.body);

filmsPresenter.init();


