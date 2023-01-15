import { render } from '../framework/render.js';
import FooterStatistics from '../view/footer-statistics-view.js';

export default class FooterPresenter {
  #siteFooter = document.querySelector('.footer');
  #footerComponent = new FooterStatistics();

  init() {
    render(this.#footerComponent, this.#siteFooter);
  }
}
