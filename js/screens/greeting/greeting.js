import View from './greeting-view';
import showScreen from '../../methods/show-screen';
import nextScreen from '../rules/rules';

const screen = new View();
screen.goNext = () => {
  showScreen(nextScreen());
};

export default () => screen;
