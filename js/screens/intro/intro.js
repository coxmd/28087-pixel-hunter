import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './intro-view';

class IntroScreen {
  constructor() {
    this.view = new View();
  }

  init() {
    showScreen(this.view);
    this.view.goNext = () => {
      App.showGreeting();
    };
  }
}

export default new IntroScreen();
