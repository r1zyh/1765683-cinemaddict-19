import FilmPopupView from '../view/film-popup-view.js';
import { render } from '../render.js';

export default class PopupPresenter {
  constructor({ popupContainer, filmModel, commentModel }) {
    this.popupContainer = popupContainer;
    this.filmsModel = filmModel;
    this.commentModel = commentModel;
  }

  init() {
    this.film = this.filmsModel.getFilmForPopup();
    this.comments = this.commentModel
      .getComments()
      .filter((comment) => this.film.comments.includes(comment.id));
  }

  showPopup() {
    render(
      new FilmPopupView({
        film: this.film,
        comments: this.comments,
      }),
      this.popupContainer
    );
  }
}
