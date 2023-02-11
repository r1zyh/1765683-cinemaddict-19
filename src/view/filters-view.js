import { FilterType } from '../mock/const.js';
import AbstractView from '../framework/view/abstract-view.js';

function createFilterItemTemplate(filter, currentFilterType) {
  const {type, name, count} = filter;
  console.log(type, name, count)
  return `<a href=#"${name}" class="main-navigation__item
     ${ type === currentFilterType ? 'main-navigation__item--active' : ''}">
      ${FilterType[filter]}
      ${filter === 'all' ? '' : `<span class="main-navigation__item-count">${count}</span>`}
     </a>`;
}

function createFiltersTemplate(filterItems, currentFilterType) {
  const filterItemsTemplate = Object.entries(filterItems)
    .map(([filter, count]) => createFilterItemTemplate(filter, count, currentFilterType))
    .join('');

  return `<nav class="main-navigation">
      ${filterItemsTemplate}
    </nav>
    `;
}

export default class FiltersView extends AbstractView {
  #filter = null;
  #currentFilter = null;

  constructor({ filter, currentFilterType }) {
    super();
    this.#filter = filter;
    this.#currentFilter = currentFilterType;
  }

  get template() {
    return createFiltersTemplate(this.#filter, this.#currentFilter);
  }
}
