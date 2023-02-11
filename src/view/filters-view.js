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
  #handleFilterTypeChange = null;

  constructor({ filter, currentFilterType, onFilterTypeChange }) {
    super();
    this.#filter = filter;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;

    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  get template() {
    return createFiltersTemplate(this.#filter, this.#currentFilter);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };

}
