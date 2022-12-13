import { getRandomArrayElement } from '../util.js';

const FILM_ID = 20;

const COMMENT_ID = 20;

const COMMENTS_LIST_LENGTH = 6;

const FILMS_LIST_LENGTH = 6;

const FILM_RATING = 10;

const AGE_RATING = [0, 7, 14, 16, 18];

const DURATION = [100, 116, 169 ];

const DIRECTORS = ['Takeshi Kitano', 'Martin Scorsese', 'Quentin Tarantino', 'Guy Ritchie', 'Woody Allen', 'Tim Burton' ];

const ACTORS = ['Will Smith', 'Ben Affleck', 'Tom Cruise', 'Johnny Depp', 'Keanu Reeves', 'Leonardo Dicaprio', 'Mark Wahlberg'];

const WRITERS = ['Anne Wigton', 'Heinz Herald', 'Richard Weil', 'Andrei Tarkovsky', 'Alexey Balabanov', 'Yuri Bykov' ];

const RELEASE_COUNTRIES = ['Russia', 'USA', 'Finland', 'France', 'Spain', 'Norway'];

const GENRES = ['Comedy', 'Drama', 'Fantasy', 'Science fiction', 'Historical film' ];

const BOOLEAN = [true, false];

const RELEASE_DATE = ['1972-02-05T00:00:00.000Z', '1997-05-17T00:00:00.000Z', '2014-08-09T00:00:00.000Z'];

const WATCHING_DATES = ['1975-08-09T00:00:00.000Z', '2000-03-21T00:00:00.000Z', '2020-12-22T00:00:00.000Z'];

const TITLES = ['An ex-soldier Danila Bagrov defends the weak in St. Petersburg in the 1990s. The film that made Sergei Bodrov a national hero',
  'At the space station, Chris encounters the ghost of his dead wife. Tarkovskys masterpiece about temptation and the essence of love',
  'A plumber is trying to prevent the collapse of an apartment building. Drama by Yuri Bykov about corruption and indifference'];

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

const COMMENT_EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];

const COMMENT_AUTHORS = ['DecaDD', 'Belarus', 'Kelmoon', 'xaniya', 'TordonDNK'];

const COMMENT_DATES = ['2019-05-11T16:12:32.554Z', '2019-05-22T02:06:22.527Z', '2019-08-01T21:12:32.554Z', '2019-09-11T17:11:41.529Z', '2018-12-08T09:18:32.651Z'];

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

const DESCRIPTIONS = ['The lives of 800 people in the dormitory are literally hanging by a thread due to the indifference of local authorities. The building could collapse at any moment. And who would have thought that the fate of people would be in the hands of a simple plumber. But will he be able to change something and prevent a catastrophe?',
  'A new scientist, psychologist Chris Kelvin, arrives at the space station, whose employees have long and vainly tried to cope with the mystery of the planet Solaris, completely covered by the Ocean. His task is to understand the strange messages coming from the station and close it along with all the fruitless "solaristics". At first, it seems to him that the few scientists who survived at the station have gone crazy, and then he himself becomes a victim of a terrible obsession: his wife Hari, who committed suicide some time ago, appears to him.',
  'Demobilized, Danila Bagrov returned to his native town. But the boring life of the Russian provinces did not suit him, and he decided to go to St. Petersburg, where, according to rumors, his elder brother has been prospering for several years. Daniel found his brother. But everything turned out to be not so simple - the brother works as a hired killer.',
];

export { FILM_ID, FILM_RATING, AGE_RATING,DURATION,
  DIRECTORS, ACTORS, WRITERS,RELEASE_COUNTRIES,
  GENRES, BOOLEAN, RELEASE_DATE, WATCHING_DATES,
  TITLES, COMMENTS_TEXT, POSTERS, DESCRIPTIONS,
  COMMENT_EMOTIONS, COMMENT_ID, COMMENT_AUTHORS, COMMENT_DATES,
  SOME_POSTER, COMMENTS_LIST_LENGTH, FILMS_LIST_LENGTH };
