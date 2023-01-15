import AbstractView from '../framework/view/abstract-view.js';

function createFiltersTemplate() {
  return `
    <nav class="main-navigation">
      <a
        href="#all"
        class="main-navigation__item main-navigation__item--active"
      >
        All movies
      </a>
      <a href="#watchlist" class="main-navigation__item">
        Watchlist <span class="main-navigation__item-count">24</span>
      </a>
      <a href="#history" class="main-navigation__item">
        History <span class="main-navigation__item-count">9</span>
      </a>
      <a href="#favorites" class="main-navigation__item">
        Favorites <span class="main-navigation__item-count">3</span>
      </a>
    </nav>
    `;
}

export default class Filters extends AbstractView {
  get template() {
    return createFiltersTemplate();
  }
}
