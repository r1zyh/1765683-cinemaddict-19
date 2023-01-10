import { render } from '../render.js';
import UserRank from '../view/user-rank-view.js';

export default class HeaderPresenter {
  #siteHeader = document.querySelector('.header');
  #userRankComponent = new UserRank();

  init() {
    render(this.#userRankComponent, this.#siteHeader);
  }
}
