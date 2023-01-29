import { render } from '../framework/render.js';

export default class FilmSectionPresenter {
  #filmSectionComponent = null;
  #filmSectionContainer = null;

  constructor({ filmSectionComponent, filmSectionContainer }) {
    this.#filmSectionComponent = filmSectionComponent;
    this.#filmSectionContainer = filmSectionContainer;
  }

  init() {
    render(this.#filmSectionComponent, this.#filmSectionContainer);
  }
}
