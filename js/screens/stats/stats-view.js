import AbstractView from '../../abstract-view';
import data from './stats-data';
import getHeader from '../header';
import getFooter from '../footer';
import getScore from '../../methods/get-score';
import stats from '../stats-line';


export default class StatsView extends AbstractView {
  constructor(game) {
    super();
    this.game = game;
  }

  get template() {
    let content = `${getHeader()}
<div class="result">`;

    if (this.game.questions === 0 && this.game.lives >= 0) {
      const score = getScore(this.game.answers, this.game.lives);
      content += `<h1>${data.title.win}</h1>
<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${stats(this.game.answers)}
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
        <td class="result__extra">${this.game.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
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
      content += `<h1>${data.title.lost}</h1>
<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td>
          ${stats(this.game.answers)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
`;
    }

    content += `</div>
      ${getFooter()}`;
    return content;
  }

  bind() {
    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };
  }

  goBack() {
  }
}
