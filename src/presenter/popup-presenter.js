import FilmPopupView from '../view/film-popup-view.js';
import { render } from '../render.js';
import FilmPopupCommentView from '../view/film-comment-view.js';
export default class PopupPresenter {
  constructor({ popupContainer, filmModel, commentModel }) {
    this.popupContainer = popupContainer;
    this.filmsModel = filmModel;
    this.commentModel = commentModel;
  }

  init() {
    this.film = this.filmsModel.FilmForPopup;
    this.comments = this.commentModel
      .getComments()
      .filter((comment) => this.film.comments.includes(comment.id));
    this.showPopup();
  }

  showPopup() {
    const filmPopupView = new FilmPopupView({
      film: this.film,
      comments: this.comments,
    });

    render(
      filmPopupView,
      this.popupContainer
    );


    for (let i = 1; i < this.comments.length; i++) {
      render(new FilmPopupCommentView({ comments: this.comments[i]}), filmPopupView.commentsContainer);
    }

  }
}
