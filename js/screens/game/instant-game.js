import View from './game-view';
import getQuestion from '../../methods/get-question';
import screenBack from '../greeting/greeting';
import getAnswer from '../../methods/get-answer';
import showScreen from '../../methods/show-screen';
import checkImageSizes from '../../methods/check-image-sizes';
import screenStats from '../stats/stats';
import Timer from '../../methods/get-timer';

export default class InstantGame {
  constructor() {
    this.lives = 3;
    this.answers = [];
    this.questions = 10;
    this.timer = new Timer(30);
  }

  addAnswer(answerValue) {
    const newAnswer = getAnswer(answerValue, this.timer.time);
    this.timer.reset();
    clearInterval(this._currTimer);
    this.answers.push(newAnswer);
    this.questions--;
    if (newAnswer === `ERROR`) {
      this.lives--;
    }
  }

  timeControl(screen) {
    const timeContainer = screen.element.querySelector(`.game__timer`);
    this._currTimer = setInterval(() => {
      if (this.timer.time === 0) {
        this.addAnswer(false);
        this.next();
      }
      timeContainer.innerText = this.timer.tick();
    }, 1000);
  }

  next() {
    if (this.questions > 0 && this.lives >= 0) {
      const currQuestion = getQuestion();
      const screen = new View(currQuestion, {lives: this.lives, answers: this.answers, timer: this.timer.time});
      this.timeControl(screen);

      showScreen(screen);
      checkImageSizes();

      screen.goBack = () => {
        showScreen(screenBack());
      };

      screen.onAnswerClick = (element, evt) => {

        const answerContainer = element.querySelector(`.game__content`);
        switch (currQuestion.type) {
          case `game-1`:
            const answerItems = answerContainer.querySelectorAll(`.game__answer :checked`);
            if (answerItems.length === 2) {
              this.addAnswer(currQuestion.answers[answerItems[0].name][answerItems[0].value] && currQuestion.answers[answerItems[1].name][answerItems[1].value]);
              this.next();
            }
            break;
          case `game-2`:
            if (evt.target.name === `question1`) {
              this.addAnswer(currQuestion.answers[evt.target.name][evt.target.value]);
              this.next();
            }
            break;
          case `game-3`:
            if (evt.target.classList.contains(`game__option`)) {
              this.addAnswer(currQuestion.answers[evt.target.dataset.option]);
              this.next();
            }
            break;
        }
      };
    } else {
      showScreen(screenStats(this));
    }
  }
}
