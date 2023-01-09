import FooterPresenter from './presenter/footer-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import FilmsModel from '../src/model/film-model.js';
import FilmsPresenter from './presenter/films-presenter.js';
import CommentsModel from './model/comment-model.js';

const filmModel = new FilmsModel();
const commentModel = new CommentsModel();

const filmsPresenter = new FilmsPresenter({ filmModel, commentModel });
const headerPresenter = new HeaderPresenter();
const footerPresenter = new FooterPresenter();

headerPresenter.init();
filmsPresenter.init();
footerPresenter.init();
