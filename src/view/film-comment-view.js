import { createElement } from '../render.js';
import { humanizeFilmDueDate } from '../util.js';
function createFilmPopupCommentsTemplate(comments) {

  const { author, emotion, commentText, date } = comments;


  return `
  <li class="film-details__comment">
    <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${humanizeFilmDueDate(date)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>
    `;
}

export default class FilmPopupCommentView {
  constructor({ comments }) {
    this.comments = comments;
  }

  getTemplate() {
    return createFilmPopupCommentsTemplate(this.comments);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
