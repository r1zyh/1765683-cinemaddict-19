import { getRandomInt, getRandomArrayElement } from '../util.js';
import {
  FILM_ID,
  FILM_RATING,
  AGE_RATING,
  DURATION,
  DIRECTORS,
  TITLES,
  WRITERS,
  ACTORS,
  RELEASE_DATE,
  RELEASE_COUNTRIES,
  WATCHING_DATES,
  GENRES,
  DESCRIPTIONS,
  BOOLEAN,
  SOME_POSTER,
} from './const.js';

import {comments} from './comment.js';


const createFilm = () =>
  ({
    id: getRandomInt(FILM_ID),
    comments: [comments.id$, comments.id$],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: getRandomInt(FILM_RATING).toFixed(1),
      poster: `images/posters/${SOME_POSTER}`,
      ageRating: getRandomArrayElement(AGE_RATING),
      director: getRandomArrayElement(DIRECTORS),
      writers: getRandomArrayElement(WRITERS),
      actors: getRandomArrayElement(ACTORS),
      release: {
        date: getRandomArrayElement(RELEASE_DATE),
        releaseCountry: getRandomArrayElement(RELEASE_COUNTRIES),
      },
      duration: getRandomArrayElement(DURATION),
      genre: getRandomArrayElement(GENRES),
      description: getRandomArrayElement(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: getRandomArrayElement(BOOLEAN),
      alreadyWatched: getRandomArrayElement(BOOLEAN),
      watchingDate: getRandomArrayElement(WATCHING_DATES),
      favorite: getRandomArrayElement(BOOLEAN),
    },
  });

export { createFilm };
