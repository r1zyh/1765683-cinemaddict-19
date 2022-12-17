import {getRandomComment} from '../mock/comment.js';

const COMMENTS_LIST_LENGTH = 6;

export default class CommentsModel {
  comments = Array.from({ length: COMMENTS_LIST_LENGTH }, getRandomComment);

  getComments() {
    return this.comments;
  }
}
