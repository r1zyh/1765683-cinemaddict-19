import { render } from '../render';
import UserRankView from '../view/user-rank-view';

const siteHeader = document.querySelector('.header');

const userRankComponent = new UserRankView();

render(userRankComponent, siteHeader);
