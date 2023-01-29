import AbstractView from '../framework/view/abstract-view.js';
import { SortMode } from '../mock/const.js';

function createFilmSortTemplate(currentSort) {
  return `
    <ul class="sort">
      <li><a href="#" class="sort__button  ${currentSort === SortMode.DEFAULT ? 'sort__button--active' : ''}"  data-sort-type="${SortMode.DEFAULT}" >Sort by default</a></li>
      <li><a href="#" class="sort__button ${currentSort === SortMode.BY_DATE ? 'sort__button--active' : ''}" data-sort-type="${SortMode.BY_DATE}">Sort by date</a></li>
      <li><a href="#" class="sort__button ${currentSort === SortMode.BY_RATING ? 'sort__button--active' : ''}" data-sort-type="${SortMode.BY_RATING}">Sort by rating</a></li>
    </ul>
  `;
}

export default class Sort extends AbstractView {

  #handleSortTypeChange = null;
  #currentSort = 'default';

  constructor({ onSortTypeChange }) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;

    this.element.addEventListener('click', this.#sortTypeChangeHandler);
  }

  get template() {
    return createFilmSortTemplate(this.#currentSort);
  }

  #sortTypeChangeHandler = (evt) => {

    if (evt.target.tagName !== 'A') {
      return;
    }
    this.#currentSort = evt.target.dataset.sortType;
    evt.preventDefault();
    createFilmSortTemplate();
    this.#handleSortTypeChange(evt.target.dataset.sortType);
  };
}
