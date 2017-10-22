import screenData from './greeting-data';
import getFooter from '../footer';
import getTemplate from '../../methods/get-template';
import showScreen from '../../methods/show-screen';
import nextScreen from '../rules/rules-view';

export default (data = screenData) => {

  const content = `<div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">${data.description}</div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>
    ${getFooter()}`;

  const screenTemplate = getTemplate(content);

  screenTemplate.querySelector(`.greeting__continue`).addEventListener(`click`, () => {
    showScreen(nextScreen());
  });

  return screenTemplate;
}
