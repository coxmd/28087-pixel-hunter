import AbstractView from '../../abstract-view';
import data from './greeting-data';
import getFooter from '../footer';


export default class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"/></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">${data.description}</div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"/></span></div>
  </div>
    ${getFooter()}`;
  }

  bind() {
    this.element.querySelector(`.greeting__continue`).onclick = (evt) => {
      evt.preventDefault();
      this.goNext();
    };
  }

  goNext() {
  }
}
