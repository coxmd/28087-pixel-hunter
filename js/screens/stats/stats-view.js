import AbstractView from '../../abstract-view';
import data from './stats-data';
import getHeader from '../header';
import getFooter from '../footer';
import getScore from '../../methods/get-score';
import stats from '../stats-line';


export default class StatsView extends AbstractView {
  constructor(game = {}) {
    super();
    this.answers = typeof game.answers === `object` ? game.answers : [];
    this.lives = typeof game.lives === `number` ? game.lives : -1;
  }


  get template() {
    return `${getHeader()}<div class="result">Загрузка результатов...</div>${getFooter()}`;
  }


  showResults(resultsData) {
    const lastResult = resultsData[resultsData.length - 1];
    const isWin = lastResult.answers.length === 10 && lastResult.lives >= 0;
    const content = resultsData.reverse().reduce((result, current, i) => {
      if (current.answers.length === 10 && current.lives >= 0) {
        const score = getScore(current.answers, current.lives);
        return result + `
<table class="result__table">
      <tr>
        <td class="result__number">${i + 1}</td>
        <td colspan="2">
          ${stats(current.answers)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${score.normal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.speed}:</td>
        <td class="result__extra">${score.fastBonus / 50}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${score.fastBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.lives}:</td>
        <td class="result__extra">${current.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${score.livesBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.fine}:</td>
        <td class="result__extra">${score.fine / 50}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${-score.fine}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${score.total}</td>
      </tr>
      </table>
`;
      } else {
        return result + `
<table class="result__table">
      <tr>
        <td class="result__number">${i + 1}</td>
        <td>
          ${stats(current.answers)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
      </table>
`;
      }
    }, ``);

    this.resultElement.innerHTML = `<h1>${isWin ? data.title.win : data.title.lost}</h1>
<table class="result__table">${content}</table>`;
  }

  showErrorScreen(){
    this.resultElement.innerHTML = `<h1>Не удалось загрузить данные статистики :(</h1>`;
  }

  bind() {
    this.resultElement = this.element.querySelector(`.result`);

    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };
  }


  goBack() {
  }
}
