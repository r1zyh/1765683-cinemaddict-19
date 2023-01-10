import { getRandomArrayElement } from '../util.js';

const BOOLEAN = [true, false];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const SOME_POSTER = getRandomArrayElement(POSTERS);

const USER_RANK = ['Novice', 'Fan', 'Movie Buff'];

const SOME_RANK = getRandomArrayElement(USER_RANK);

const getUserProfile = () => ({
  userRank: SOME_RANK,
});

export { BOOLEAN, SOME_POSTER, getUserProfile };
