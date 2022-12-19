import { getRandomInt, getRandomArrayElement, getRandomUniqArrayElement, getTime } from '../util.js';
import { SOME_POSTER, BOOLEAN } from './const.js';
import { mockComments } from './comment.js';

const FILM_ID_MAX = 20;
const FILM_ID_MIN = 1;

const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 100;

const FILM_RATING_MAX = 10;
const FILM_RATING_MIN = 0;

const AGE_RATING = [0, 7, 14, 16, 18];

const DURATION = [100, 116, 169 ];

const TITLES = [
  'An ex-soldier Danila Bagrov defends the weak in St. Petersburg in the 1990s. The film that made Sergei Bodrov a national hero',
  'At the space station, Chris encounters the ghost of his dead wife. Tarkovskys masterpiece about temptation and the essence of love',
  'A plumber is trying to prevent the collapse of an apartment building. Drama by Yuri Bykov about corruption and indifference'
];

const DIRECTORS = ['Takeshi Kitano', 'Martin Scorsese', 'Quentin Tarantino', 'Guy Ritchie', 'Woody Allen', 'Tim Burton' ];

const WRITERS = [' Anne Wigton', ' Heinz Herald', ' Richard Weil', ' Andrei Tarkovsky', ' Alexey Balabanov', ' Yuri Bykov' ];

const ACTORS = [' Will Smith', ' Ben Affleck', ' Tom Cruise', ' Johnny Depp', ' Keanu Reeves', ' Leonardo Dicaprio', ' Mark Wahlberg'];

const RELEASE_DATE = ['1972-02-05T00:00:00.000Z', '1997-05-17T00:00:00.000Z', '2014-08-09T00:00:00.000Z'];

const RELEASE_COUNTRIES = ['Russia', 'USA', 'Finland', 'France', 'Spain', 'Norway'];

const GENRES = [' Comedy', ' Drama', ' Fantasy', ' Science fiction', ' Historical film', ' Horror', ' Musical' ];

const DESCRIPTIONS = ['The lives of 800 people in the dormitory are literally hanging by a thread due to the indifference of local authorities. The building could collapse at any moment. And who would have thought that the fate of people would be in the hands of a simple plumber. But will he be able to change something and prevent a catastrophe?',
  'A new scientist, psychologist Chris Kelvin, arrives at the space station, whose employees have long and vainly tried to cope with the mystery of the planet Solaris, completely covered by the Ocean. His task is to understand the strange messages coming from the station and close it along with all the fruitless "solaristics". At first, it seems to him that the few scientists who survived at the station have gone crazy, and then he himself becomes a victim of a terrible obsession: his wife Hari, who committed suicide some time ago, appears to him.',
  'Demobilized, Danila Bagrov returned to his native town. But the boring life of the Russian provinces did not suit him, and he decided to go to St. Petersburg, where, according to rumors, his elder brother has been prospering for several years. Daniel found his brother. But everything turned out to be not so simple - the brother works as a hired killer.',
];

const WATCHING_DATES = ['1975-08-09T00:00:00.000Z', '2000-03-21T00:00:00.000Z', '2020-12-22T00:00:00.000Z'];


const createFilm = () =>
  ({
    id: getRandomInt(FILM_ID_MIN, FILM_ID_MAX),
    comments: [mockComments[1].id, mockComments[3].id, mockComments[0].id, mockComments[2].id ],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: `Origin: ${TITLES}.`,
      totalRating: getRandomInt(FILM_RATING_MIN ,FILM_RATING_MAX).toFixed(1),
      poster: `images/posters/${SOME_POSTER}`,
      ageRating: getRandomArrayElement(AGE_RATING),
      directors: getRandomArrayElement(DIRECTORS),
      writers: getRandomUniqArrayElement(WRITERS),
      actors: getRandomUniqArrayElement(ACTORS),
      release: {
        date: getRandomArrayElement(RELEASE_DATE),
        releaseCountry: getRandomArrayElement(RELEASE_COUNTRIES),
      },
      duration: getTime(getRandomArrayElement(DURATION)),
      genres: getRandomUniqArrayElement(GENRES),
      description: getRandomArrayElement(DESCRIPTIONS),
      commentCount: getRandomInt(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT),
    },
    userDetails: {
      watchlist: getRandomArrayElement(BOOLEAN),
      alreadyWatched: getRandomArrayElement(BOOLEAN),
      watchingDate: getRandomArrayElement(WATCHING_DATES),
      favorite: getRandomArrayElement(BOOLEAN),
    },
  });

export { createFilm };
