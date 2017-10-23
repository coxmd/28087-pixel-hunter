import screenData from './rules-data';
import getHeader from '../header';
import getFooter from '../footer';
import getTemplate from '../../methods/get-template';
import showScreen from '../../methods/show-screen';
import nextScreen from '../game/game';
import screenBack from '../greeting/greeting-view';


export default (data = screenData) => {

  const content = `${getHeader()}
<div class="rules">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.description}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.form.placeholder}"/>
      <button class="rules__button  continue" type="submit" disabled>${data.form.button}</button>
    </form>
  </div>
    ${getFooter()}`;

  const screenTemplate = getTemplate(content);

  screenTemplate.querySelector(`.back`).addEventListener(`click`, () => {
    showScreen(screenBack());
  });

  const nextBtn = screenTemplate.querySelector(`.rules__button`);

  screenTemplate.querySelector(`.rules__input`).addEventListener(`input`, (evt) => {
    nextBtn.disabled = evt.target.value === ``;
  });

  nextBtn.addEventListener(`click`, () => {
    nextScreen();
  });

  return screenTemplate;
}
