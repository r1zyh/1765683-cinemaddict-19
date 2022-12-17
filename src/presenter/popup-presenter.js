import FilmPopupView from '../view/film-popup-view.js';
import { render } from '../render.js';

export default class PopupPresenter {
  init() {
    const popupComponent = new FilmPopupView();

    const siteBody = document.body;

    render(popupComponent, siteBody);
  }
}
