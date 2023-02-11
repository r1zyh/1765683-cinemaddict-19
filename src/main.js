import FooterPresenter from './presenter/footer-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilmsModel from '../src/model/film-model.js';
import FilmsPresenter from './presenter/films-presenter.js';
import CommentsModel from './model/comment-model.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filters-presenter.js';

const siteMainElement = document.querySelector('.main');

const filmModel = new FilmsModel();
const commentModel = new CommentsModel();
const filterModel = new FilterModel();
const filmsPresenter = new FilmsPresenter({ filmModel, commentModel, filterModel });

const filterPresenter = new FilterPresenter({
  filterContainer: siteMainElement,
  filterModel,
  filmModel,
});
const headerPresenter = new HeaderPresenter();
const footerPresenter = new FooterPresenter();

headerPresenter.init();
filmsPresenter.init();
footerPresenter.init();
filterPresenter.init();
