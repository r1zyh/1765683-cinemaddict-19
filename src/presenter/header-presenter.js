import { render } from '../render.js';
import UserRankView from '../view/user-rank-view.js';

export default class HeaderPresenter {
  #siteHeader = document.querySelector('.header');
  #userRankComponent = new UserRankView();

  init() {

    render(this.#userRankComponent, this.#siteHeader);
  }
}
