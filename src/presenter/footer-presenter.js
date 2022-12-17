import { render } from '../render';
import FooterStatisticsView from '../view/footer-statistics-view.js';

export default class FooterPresenter {
  init() {
    const siteFooter = document.querySelector('.footer');

    const footerComponent = new FooterStatisticsView();

    render(footerComponent, siteFooter);
  }
}
