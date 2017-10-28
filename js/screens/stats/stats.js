import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './stats-view';

class StatsScreen {
  init(state) {
    this.view = new View(state);
    showScreen(this.view);
    this.view.goBack = () => {
      App.showGreeting();
    };
  }
}

export default new StatsScreen();
