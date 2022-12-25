import { render } from '../render';
import FooterStatisticsView from '../view/footer-statistics-view.js';

export default class FooterPresenter {
  #siteFooter = document.querySelector('.footer');
  #footerComponent = new FooterStatisticsView();

  init() {

    render(this.#footerComponent, this.#siteFooter);
  }
}
