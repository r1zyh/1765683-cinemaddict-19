import FilmPopupView from '../view/film-popup-view.js';
import { render } from '../render.js';

const popupComponent = new FilmPopupView();
const siteBody = document.body;


render(popupComponent, siteBody);
