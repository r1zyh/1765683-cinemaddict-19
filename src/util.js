import dayjs from 'dayjs';

const DATE_FORMAT = 'D MMMM YYYY';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * max + min);
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function humanizeFilmDueDate(dueDate) {
  return dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
}

function getRandomUniqArrayElement(items) {
  const length = getRandomInt(1, 6);
  items.length = length;
  const result = items.reduce((acc, item) => {
    if (acc.includes(item)) {
      return acc;
    }
    return [...acc, item];
  }, []);
  return result;
}

export { getRandomInt, getRandomArrayElement, humanizeFilmDueDate, getRandomUniqArrayElement };


