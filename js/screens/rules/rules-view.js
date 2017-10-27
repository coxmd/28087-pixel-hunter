import AbstractView from '../../abstract-view';
import data from './rules-data';
import getHeader from '../header';
import getFooter from '../footer';


export default class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `${getHeader()}
<div class="rules">
    <h1 class="rules__title">${data.title}</h1>
    <p class="rules__description">${data.description}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data.form.placeholder}"/>
      <button class="rules__button  continue" type="submit" disabled>${data.form.button}</button>
    </form>
  </div>
    ${getFooter()}`;
  }

  bind() {
    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };

    this.element.querySelector(`.rules__button`).onclick = (evt) => {
      evt.preventDefault();
      this.goNext();
    };

    this.element.querySelector(`.rules__input`).oninput = (evt) => {
      evt.preventDefault();
      this.onInput(evt);
    };
  }

  goBack() {
  }

  goNext() {
  }

  onInput() {
  }
}
