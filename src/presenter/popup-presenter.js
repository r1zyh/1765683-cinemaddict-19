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
  }

  showPopup(component) {

    render(component,this.popupContainer);


    for (let i = 1; i < this.comments.length; i++) {
      render(new FilmPopupCommentView({ comments: this.comments[i]}), component.commentsContainer);
    }

  }
}
