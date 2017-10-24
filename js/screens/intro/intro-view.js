import screenData from './intro-data';
import getFooter from '../footer';
import getTemplate from '../../methods/get-template';
import showScreen from '../../methods/show-screen';
import nextScreen from '../greeting/greeting-view';

export default (data = screenData) => {

  const content = `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${data.description}</p>
    </div>
  </div>
    ${getFooter()}`;

  const screenTemplate = getTemplate(content);

  screenTemplate.querySelector(`.intro__asterisk`).addEventListener(`click`, () => {
    showScreen(nextScreen());
  });

  return screenTemplate;
};
