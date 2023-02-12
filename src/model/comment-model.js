import { getRandomComment } from '../mock/comment.js';
import Observable from '../framework/observable.js';

const COMMENTS_LIST_LENGTH = 6;

export default class CommentsModel extends Observable {
  #comments = Array.from({ length: COMMENTS_LIST_LENGTH }, getRandomComment);

  get comments() {
    return this.#comments;
  }

  addComment(updateType, update) {
    this.#comments = [...this.#comments, update.data ];
    update.film = { ...update.film, comments: [...update.film.comments, update.data.id] };

    this._notify(updateType, update);
  }

  deleteComment(updateType, update) {
    const index = this.#comments.findIndex((film) => film.id === update.id);

    if (index === -1) {
      throw new Error('Can\t delete unexisting comment');
    }

    this.#comments = [...this.#comments.slice(0, index), ...this.#comments.slice(index + 1)];

    this._notify(updateType);
  }
}
