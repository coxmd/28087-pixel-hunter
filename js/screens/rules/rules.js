import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './rules-view';

class RulesScreen {
  constructor() {
    this.view = new View();
  }

  init() {
    showScreen(this.view);

    const nextBtn = this.view.element.querySelector(`.rules__button`);
    this.view.onInput = (evt) => {
      nextBtn.disabled = evt.target.value === ``;
    };

    this.view.goNext = () => {
      App.userName = this.view.element.querySelector(`.rules__input`).value;
      App.showGame();
    };

    this.view.goBack = () => {
      App.showGreeting();
    };
  }
}

export default new RulesScreen();
