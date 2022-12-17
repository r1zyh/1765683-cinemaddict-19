/*import './presenter/films-presenter.js';
import './presenter/header-presenter.js';
import './presenter/main-presenter.js';
import './presenter/footer-presenter.js';
import './presenter/popup-presenter.js';
*/
import FooterPresenter from './presenter/footer-presenter.js';
import HeaderPresenter from './presenter/header-presenter.js';
import { filmsPresenter } from './presenter/main-presenter.js';
import PopupPresenter from './presenter/popup-presenter.js';

const headerPresenter = new HeaderPresenter;
const footerPresenter = new FooterPresenter;
const popupPresenter = new PopupPresenter;

headerPresenter.init();
filmsPresenter.init();
footerPresenter.init();
popupPresenter.init();
