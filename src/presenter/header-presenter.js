import { render } from '../render.js';
import UserRankView from '../view/user-rank-view.js';

export default class HeaderPresenter {
  init() {
    const siteHeader = document.querySelector('.header');

    const userRankComponent = new UserRankView();

    render(userRankComponent, siteHeader);
  }
}
