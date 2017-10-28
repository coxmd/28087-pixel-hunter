import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './greeting-view';

class GreetingScreen {
  constructor() {
    this.view = new View();
  }

  init() {
    showScreen(this.view);
    this.view.goNext = () => {
      App.showRules();
    };
  }
}

export default new GreetingScreen();
