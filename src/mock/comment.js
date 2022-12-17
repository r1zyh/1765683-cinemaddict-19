import { getRandomArrayElement } from '../util.js';

const COMMENT_AUTHORS = ['DecaDD', 'Belarus', 'Kelmoon', 'xaniya', 'TordonDNK'];

const COMMENT_EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];

const COMMENT_DATES = ['2019-05-11T16:12:32.554Z', '2019-05-22T02:06:22.527Z', '2019-08-01T21:12:32.554Z', '2019-09-11T17:11:41.529Z', '2018-12-08T09:18:32.651Z'];

const COMMENTS_TEXT = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.'
];

const mockComments = [
  {
    id: 1,
    author: getRandomArrayElement(COMMENT_AUTHORS),
    comment: getRandomArrayElement(COMMENTS_TEXT),
    date: getRandomArrayElement(COMMENT_DATES),
    emotion: getRandomArrayElement(COMMENT_EMOTIONS),
  },

  {
    id: 2,
    author: getRandomArrayElement(COMMENT_AUTHORS),
    comment: getRandomArrayElement(COMMENTS_TEXT),
    date: getRandomArrayElement(COMMENT_DATES),
    emotion: getRandomArrayElement(COMMENT_EMOTIONS),
  },

  {
    id: 3,
    author: getRandomArrayElement(COMMENT_AUTHORS),
    comment: getRandomArrayElement(COMMENTS_TEXT),
    date: getRandomArrayElement(COMMENT_DATES),
    emotion: getRandomArrayElement(COMMENT_EMOTIONS),
  },

  {
    id: 4,
    author: getRandomArrayElement(COMMENT_AUTHORS),
    comment: getRandomArrayElement(COMMENTS_TEXT),
    date: getRandomArrayElement(COMMENT_DATES),
    emotion: getRandomArrayElement(COMMENT_EMOTIONS),
  }

];

const getRandomComment = () => getRandomArrayElement(mockComments);

export { getRandomComment, mockComments };
