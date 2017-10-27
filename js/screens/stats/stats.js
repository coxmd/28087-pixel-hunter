import View from './stats-view';
import showScreen from '../../methods/show-screen';
import screenBack from '../greeting/greeting';

export default (game) => {
  const screen = new View(game);
  screen.goBack = () => {
    showScreen(screenBack());
  };
  return screen;
};
