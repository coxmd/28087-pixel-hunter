import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './stats-view';

import {loadResults} from './../../loader';

class StatsScreen {
  init(state) {
    this.view = new View(state);
    showScreen(this.view);
    this.view.goBack = () => {
      App.showGreeting();
    };

    if (typeof App.userName !== `undefined`) {
      loadResults(App.userName).then((response) => response.json()).then((results) => this.view.showResults(results)).catch(() => this.view.showErrorScreen());
    } else {
      this.view.showErrorScreen();
    }
  }
}

export default new StatsScreen();
