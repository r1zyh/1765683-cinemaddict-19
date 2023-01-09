import { createElement } from '../render.js';
import { humanizeCommentsDueDate } from '../util.js';
function createFilmPopupCommentsTemplate(filmComments) {

  const { author, emotion, commentText, date } = filmComments;


  return `
  <li class="film-details__comment">
    <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${humanizeCommentsDueDate(date)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>
    `;
}

export default class FilmPopupComment {
  #element = null;
  #filmComments = null;

  constructor({ comments }) {
    this.#filmComments = comments;
  }

  get template() {
    return createFilmPopupCommentsTemplate(this.#filmComments);
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
