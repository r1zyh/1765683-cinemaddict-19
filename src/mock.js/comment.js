import { getRandomInt, getRandomArrayElement } from '../util.js';
import {
  COMMENT_ID,
  COMMENT_AUTHORS,
  COMMENTS_TEXT,
  COMMENT_EMOTIONS,
  COMMENT_DATES,
} from './const.js';

const createComment = () => ({
  id: getRandomInt(COMMENT_ID),
  author: getRandomArrayElement(COMMENT_AUTHORS),
  comment: getRandomArrayElement(COMMENTS_TEXT),
  date: getRandomArrayElement(COMMENT_DATES),
  emotion: getRandomArrayElement(COMMENT_EMOTIONS),
});

export { createComment };
