import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { humanizeCommentsDueDate, humanizePopUpDueDate } from '../util.js';

function createFilmPopupCommentsTemplate(filmComments) {
  return filmComments.map((comment) => {
    const { author, emotion, commentText, date } = comment;

    return `
  <li class="film-details__comment">
    <span class="film-details__comment-emoji">
    <img src="./images/emoji/${emotion}.png" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${commentText}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${author}</span>
        <span class="film-details__comment-day">${humanizeCommentsDueDate(date)}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>
    `;
  }).join('');
}
function createFilmPopupTemplate(film) {
  const { filmInfo } = film;
  const {
    description,
    ageRating,
    alternativeTitle,
    poster,
    title,
    totalRating,
    genres,
    release,
    duration,
    directors,
    actors,
    writers,
  } = filmInfo;

  function getGenresList(someGenres) {
    let genresTemplate = '';

    for (const genre of someGenres) {
      genresTemplate += `<span class="film-details__genre">${genre}</span>`;
    }

    return genresTemplate;
  }

  const favoriteActiveClass = film.isFavorite ? 'film-details__control-button--active' : '';

  const watchedActiveClass = film.isWatched ? 'film-details__control-button--active' : '';

  const watchListActiveClass = film.isWatchList ? 'film-details__control-button--active' : '';

  return `
    <section class="film-details">
      <div class="film-details__inner">
        <div class="film-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./${poster}" alt="${title}">
              
              <p class="film-details__age">${ageRating}+</p>
            </div>
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${title}</h3>
                  <p class="film-details__title-original">${alternativeTitle}</p>
                </div>
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${totalRating}</p>
                </div>
              </div>
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${directors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${humanizePopUpDueDate(release.date)}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Duration</td>
                  <td class="film-details__cell">${duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${release.releaseCountry}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    ${getGenresList(genres)}
                </td>
                </tr>
              </table>
              <p class="film-details__film-description">
                ${description}
              </p>
            </div>
          </div>
          <section class="film-details__controls">
            <button type="button" class="film-details__control-button ${watchListActiveClass} film-details__control-button--watchlist"
              id="watchlist" name="watchlist">Add to watchlist</button>
            <button type="button"
                class="film-details__control-button ${watchedActiveClass} film-details__control-button--watched"
              id="watched" name="watched">Already watched</button>
            <button type="button" class="film-details__control-button ${favoriteActiveClass} film-details__control-button--favorite" id="favorite"
              name="favorite">Add to favorites</button>
          </section>
        </div>
        <div class="film-details__bottom-container">
          <section class="film-details__comments-wrap">
          <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${film.comments.length}</span></h3>
             ${createFilmPopupCommentsTemplate(film.comments)}
          <ul class="film-details__comments-list">
          
          </ul>
          <form class="film-details__new-comment" action="" method="get">
            <div class="film-details__add-emoji-label">
            ${film.formSmile ? `<img src="./images/emoji/${film.formSmile}.png" width="55" height="55" alt="${film.formSmile}">` : ''}
            </div>

            <label class="film-details__comment-label">
              <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
            </label>

            <div class="film-details__emoji-list">
              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" ${film.formSmile === 'smile' ? 'checked' : ''}>
              <label class="film-details__emoji-label" for="emoji-smile">
                <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping" ${film.formSmile === 'sleeping' ? 'checked' : ''}>
              <label class="film-details__emoji-label" for="emoji-sleeping">
                <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke" ${film.formSmile === 'puke' ? 'checked' : ''}>
              <label class="film-details__emoji-label" for="emoji-puke">
                <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
              </label>

              <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry" ${film.formSmile === 'angry' ? 'checked' : ''}>
              <label class="film-details__emoji-label" for="emoji-angry">
                <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
    `;
}

export default class FilmPopup extends AbstractStatefulView {
  onWatchListClick = null;

  constructor({
    film,
    scrollPosition,
    onCloseClick,
    onFavoriteClick,
    onWatchedClick,
    onWatchListClick,
    onScroll,
  }) {
    super();
    this.film = film;
    this.scrollPosition = scrollPosition;
    this.onCloseClick = onCloseClick;
    this.onFavoriteClick = onFavoriteClick;
    this.onWatchedClick = onWatchedClick;
    this.onWatchListClick = onWatchListClick;
    this.onScroll = onScroll;

    this._state = FilmPopup.parseFilmToState(this.film);
    this._restoreHandlers();
  }

  static parseFilmToState(film) {
    return {
      ...film,
      isFavorite: !!film.userDetails.favorite,
      isWatched: !!film.userDetails.alreadyWatched,
      isWatchList: !!film.userDetails.watchlist,
      formSmile: null,
    };
  }

  get template() {
    return createFilmPopupTemplate(this._state);
  }

  restoreScroll() {
    this.element.scrollTop = this.scrollPosition;
  }

  updateScrollPosition(offset) {
    this.scrollPosition = offset;
  }

  updateElement(update) {
    super.updateElement(update);
    this.restoreScroll();
  }

  _restoreHandlers() {
    this.element.addEventListener('scroll', ({ currentTarget }) =>
      this.onScroll(currentTarget.scrollTop)
    );

    this.element
      .querySelector('.film-details__close-btn')
      .addEventListener('click', this.onCloseClick);

    this.element
      .querySelector('.film-details__control-button--watchlist')
      .addEventListener('click', this.onWatchListClick);

    this.element
      .querySelector('.film-details__control-button--watched')
      .addEventListener('click', this.onWatchedClick);

    this.element
      .querySelector('.film-details__control-button--favorite')
      .addEventListener('click', this.onFavoriteClick);

    this.element.querySelectorAll('.film-details__emoji-item').forEach((element) => {
      element.addEventListener('change', ({ currentTarget }) => {
        this.updateElement({ formSmile: currentTarget.value });
      });
    });
  }

}

