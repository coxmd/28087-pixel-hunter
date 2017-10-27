import AbstractView from '../../abstract-view';
import data from './intro-data';
import getFooter from '../footer';

export default class InrtoView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto">${data.description}</p>
    </div>
  </div>
  ${getFooter()}`;
  }

  bind() {
    this.element.querySelector(`.intro__asterisk`).onclick = (evt) => {
      evt.preventDefault();
      this.goNext();
    };
  }

  goNext() {
  }
}

