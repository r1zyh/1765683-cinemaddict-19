import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMMM YYYY';
const POPUP_DATE_FORMAT = 'YYYY';

const MIN_ARRAY_LENGTH = 1;
const MAX_ARRAY_LENGTH = 6;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getTime(mins) {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours }h ${ minutes }m`;
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeFilmDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(POPUP_DATE_FORMAT) : '';
}

function humanizePopUpDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getRandomUniqArrayElement(items) {
  const length = getRandomInt(MIN_ARRAY_LENGTH, MAX_ARRAY_LENGTH);
  items.length = length;
  const result = items.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
  return result;
}

export { getRandomInt, getRandomArrayElement, humanizeFilmDueDate, getRandomUniqArrayElement, humanizePopUpDueDate, getTime };


