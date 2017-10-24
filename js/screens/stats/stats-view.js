import screenData from './stats-data';
import getHeader from '../header';
import getFooter from '../footer';
import getTemplate from '../../methods/get-template';
import showScreen from '../../methods/show-screen';
import getScore from '../../methods/get-score';
import screenBack from '../greeting/greeting-view';
import stats from '../stats-line';


export default (game, data = screenData) => {

  let content = `${getHeader()}
<div class="result">`;

  if (game.questions === 0 && game.lives >= 0) {
    content += `<h1>${data.title.win}</h1>
<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${stats(game.answers)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${getScore(game.answers, 0)}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.speed}:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">0</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.lives}:</td>
        <td class="result__extra">${game.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${game.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data.bonus.fine}:</td>
        <td class="result__extra">0&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">-0</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getScore(game.answers, game.lives)}</td>
      </tr>
    </table>
`;
  } else {
    content += `<h1>${data.title.lost}</h1>
<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td>
          ${stats(game.answers)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>
`;
  }

  content += `</div>
      ${getFooter()}`;
  const screenTemplate = getTemplate(content);

  screenTemplate.querySelector(`.back`).addEventListener(`click`, () => {
    showScreen(screenBack());
  });

  return screenTemplate;
};
