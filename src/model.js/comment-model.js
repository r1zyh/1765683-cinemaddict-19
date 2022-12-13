import { COMMENTS_LIST_LENGTH } from '../const.js';
import { createComment } from '../mocks/comment.js';

export default class CommentsModel {
  comments = Array.from({ length: COMMENTS_LIST_LENGTH }, createComment);

  getComments() {
    return this.comments;
  }
}
