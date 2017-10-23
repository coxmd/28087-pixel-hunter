import getTemplate from '../../methods/get-template';
import getAnswer from '../../methods/get-answer';
import showScreen from '../../methods/show-screen';
import question from '../../methods/get-question';
import checkImageSizes from '../../methods/check-image-sizes';
import gameView from './game-view';
import screenBack from '../greeting/greeting-view';
import screenStat from '../stats/stats-view';

export default () => {
  return {
    lives: 3,
    answers: [],
    questions: 10,

    addAnswer(item) {
      this.answers.push(item);
      this.questions--;
      if (item === `ERROR`) {
        this.lives--;
      }
    },

    showNext() {
      if (this.questions > 0 && this.lives >= 0) {
        const newQuestion = question();
        const screenTemplate = getTemplate(gameView(newQuestion, this));

        screenTemplate.querySelector(`.back`).addEventListener(`click`, () => {
          showScreen(screenBack);
        });

        switch (newQuestion.type) {
          case `game-1`:
            const answerContainer = screenTemplate.querySelector(`.game__content`);

            answerContainer.addEventListener(`click`, () => {
              const answerItems = answerContainer.querySelectorAll(`.game__answer :checked`);
              if (answerItems.length === 2) {
                if (newQuestion.answers[answerItems[0].name][answerItems[0].value] && newQuestion.answers[answerItems[1].name][answerItems[1].value]) {
                  this.addAnswer(getAnswer(true));
                } else {
                  this.addAnswer(getAnswer(false));
                }
                this.showNext();
              }
            });
            break;
          case `game-2`:
            const answers = screenTemplate.querySelectorAll(`input[name=question1]`);

            answers.forEach((item) => {
              item.addEventListener(`click`, (evt) => {
                if (newQuestion.answers[evt.target.name][evt.target.value]) {
                  this.addAnswer(getAnswer(true));
                } else {
                  this.addAnswer(getAnswer(false));
                }
                this.showNext();
              });
            });
            break;
          case `game-3`:
            screenTemplate.querySelector(`.game__content`).addEventListener(`click`, (evt) => {
              if (evt.target.classList.contains(`game__option`)) {
                if (newQuestion.answers[evt.target.dataset.option]) {
                  this.addAnswer(getAnswer(true));
                } else {
                  this.addAnswer(getAnswer(false));
                }
                this.showNext();
              }
            });
            break;
        }
        showScreen(screenTemplate);
        checkImageSizes();
      } else {
        showScreen(screenStat(this));
      }
    },
  };
};
