import AbstractView from '../../abstract-view';

import getHeader from '../header';
import getFooter from '../footer';
import stats from '../stats-line';
import {QuestionType, AnswerType} from '../../methods/get-question';

export default class GameView extends AbstractView {
  constructor(question, data) {
    super();
    this.question = question;
    this.data = data;
  }

  get template() {
    let gameScreen = ``;
    switch (this.question.type) {
      case QuestionType.GAME1:
        const game1Options = (data) => data.reduce((str, current, i) => `
        ${str}
        <div class="game__option">
        <img src="${current.image.url}" alt="Option ${i}" width="${current.image.width}" height="${current.image.height}"/>
        <label class="game__answer game__answer--photo">
          <input name="question${i}" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${i}" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>`, ``);
        gameScreen = `<form class="game__content">${game1Options(this.question.answers)}</form>`;
        break;
      case QuestionType.GAME2:
        const oneImage = this.question.answers[0].image;
        gameScreen = `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${oneImage.url}" alt="Option 1" width="${oneImage.width}" height="${oneImage.height}"/>
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
      case QuestionType.GAME3:
        let game3Options = ``;
        let isPhoto = 0;
        this.question.answers.forEach((current, i) => {
          game3Options += `<div class="game__option" data-option="${i}">
<img src="${current.image.url}" alt="Option ${i}" width="${current.image.width}" height="${current.image.height}"/>
      </div>`;
          if (current.type === AnswerType.photo) {
            isPhoto++;
          }
        });
        gameScreen = `<form class="game__content game__content--triple" data-target="${isPhoto === 1 ? AnswerType.photo : AnswerType.painting}">
${game3Options}</form>`;
        break;
    }
    return `${getHeader(this.data)}
      <div class="game">
    <p class="game__task">${this.question.question}</p>
    ${gameScreen}


<div class="stats">${stats(this.data.answers)}</div>
</div>
${getFooter()}
`;
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

  goBack() {
  }

  onAnswerClick() {
  }
}
