import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMMM YYYY';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeFilmDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

export { getRandomInt, getRandomArrayElement, humanizeFilmDueDate };


