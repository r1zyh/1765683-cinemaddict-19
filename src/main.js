import FooterPresenter from './presenter/footer-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilmsModel from '../src/model/film-model.js';
import FilmsPresenter from './presenter/films-presenter.js';
import CommentsModel from './model/comment-model.js';
import FilterModel from './model/filter-model.js';

const filmModel = new FilmsModel();
const commentModel = new CommentsModel();
const filterModel = new FilterModel();
const filmsPresenter = new FilmsPresenter({ filmModel, commentModel, filterModel });

const headerPresenter = new HeaderPresenter();
const footerPresenter = new FooterPresenter();

headerPresenter.init();
filmsPresenter.init();
footerPresenter.init();
