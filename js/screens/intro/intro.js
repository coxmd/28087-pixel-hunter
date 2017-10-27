import View from './intro-view';
import showScreen from '../../methods/show-screen';
import nextScreen from '../greeting/greeting';

const screen = new View();
screen.goNext = () => {
  showScreen(nextScreen());
};

export default () => screen;
