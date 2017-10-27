import View from './rules-view';
import showScreen from '../../methods/show-screen';
import goGame from '../game/game';
import screenBack from '../greeting/greeting';


const screen = new View();
screen.goNext = () => {
  goGame();
};
screen.goBack = () => {
  showScreen(screenBack());
};

const nextBtn = screen.element.querySelector(`.rules__button`);
screen.onInput = (evt) => {
  nextBtn.disabled = evt.target.value === ``;
};

export default () => screen;
