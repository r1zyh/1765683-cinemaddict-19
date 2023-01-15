import AbstractView from '../framework/view/abstract-view.js';

function createFooterStatisticsTemplate() {
  return `
    <section class="footer__statistics">
      <p>130 291 movies inside</p>
    </section>
  `;
}

export default class FooterStatistics extends AbstractView {
  get template() {
    return createFooterStatisticsTemplate();
  }
}
