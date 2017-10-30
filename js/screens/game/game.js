import showScreen from '../../methods/show-screen';
import App from '../../application';
import View from './game-view';
import {randomQuestion as getQuestion, QuestionType, AnswerType} from '../../methods/get-question';
import getAnswer from '../../methods/get-answer';
import checkImageSizes from '../../methods/check-image-sizes';
import Timer from '../../methods/get-timer';

class GameScreen {
  init() {
    this.lives = 3;
    this.answers = [];
    this.questions = 10;
    this.timer = new Timer(30);
    clearInterval(this._currTimer);
    this.next();
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
      const currQuestion = getQuestion(App.questionList);
      const screen = new View(currQuestion, {lives: this.lives, answers: this.answers, timer: this.timer.time});
      this.timeControl(screen);

      showScreen(screen);
      checkImageSizes();

      screen.goBack = () => {
        App.showGreeting();
      };

      screen.onAnswerClick = (element, evt) => {
        const answerContainer = element.querySelector(`.game__content`);
        switch (currQuestion.type) {
          case QuestionType.GAME1:
            const answerItems = answerContainer.querySelectorAll(`.game__answer :checked`);
            if (answerItems.length === 2) {
              this.addAnswer(AnswerType[answerItems[0].value] === currQuestion.answers[0].type && AnswerType[answerItems[1].value] === currQuestion.answers[1].type);
              this.next();
            }
            break;
          case QuestionType.GAME2:
            if (evt.target.name === `question1`) {
              this.addAnswer(currQuestion.answers[0].type === AnswerType[evt.target.value]);
              this.next();
            }
            break;
          case QuestionType.GAME3:
            if (evt.target.classList.contains(`game__option`)) {
              this.addAnswer(currQuestion.answers[evt.target.dataset.option].type === AnswerType.painting);
              this.next();
            }
            break;
        }
      };
    } else {
      const statsData = {
        lives: this.lives,
        answers: this.answers,
      };
      App.showStats(statsData);
    }
  }
}

export default new GameScreen();
