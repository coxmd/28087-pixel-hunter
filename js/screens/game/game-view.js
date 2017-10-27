import AbstractView from '../../abstract-view';

import getHeader from '../header';
import getFooter from '../footer';
import stats from '../stats-line';

export default class GameView extends AbstractView {
  constructor(question, data) {
    super();
    this.question = question;
    this.data = data;
  }

  get template() {
    let gameScreen = `${getHeader(this.data)}
      <div class="game">
    <p class="game__task">${this.question.task}</p>`;

    switch (this.question.type) {
      case `game-1`:
        gameScreen += `
    <form class="game__content">
      <div class="game__option">
        <img src="${this.question.src.question1}" alt="Option 1" width="468" height="458"/>
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${this.question.src.question2}" alt="Option 2" width="468" height="458"/>
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
        break;
      case `game-2`:
        gameScreen += `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${this.question.src}" alt="Option 1" width="705" height="455"/>
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
        break;
      case `game-3`:
        gameScreen += `
    <form class="game__content  game__content--triple">
      <div class="game__option" data-option="option1">
        <img src="${this.question.src[0]}" alt="Option 1" width="304" height="455"/>
      </div>
      <div class="game__option  game__option--selected" data-option="option2">
        <img src="${this.question.src[1]}" alt="Option 2" width="304" height="455"/>
      </div>
      <div class="game__option" data-option="option3">
        <img src="${this.question.src[2]}" alt="Option 3" width="304" height="455"/>
      </div>
    </form>`;
        break;
    }

    gameScreen += `<div class="stats">${stats(this.data.answers)}</div>
</div>
${getFooter()}`;
    return gameScreen;
  }

  bind() {
    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };
    this.element.querySelector(`.game__content`).onclick = (evt) => {
      this.onAnswerClick(this.element, evt);
    };
  }

  goBack() {}

  onAnswerClick() {}
}
