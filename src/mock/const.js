import { getRandomArrayElement } from '../util.js';

const FILMS_LIST_LENGTH = 6;

const BOOLEAN = [true, false];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg'
];

const SOME_POSTER = getRandomArrayElement(POSTERS);

export {FILMS_LIST_LENGTH, BOOLEAN, SOME_POSTER};
