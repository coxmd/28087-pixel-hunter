const KEY_ARROW_LEFT = 37;
const KEY_ARROW_RIGHT = 39;

const mainContainer = document.querySelector(`main.central`);
const screenTemplates = Array.from(document.querySelectorAll(`template`));
screenTemplates.unshift(mainContainer.cloneNode(true));

let activeTemplate = 0;

const showScreen = (number) => {
  mainContainer.innerHTML = screenTemplates[number].innerHTML;
};

document.addEventListener(`keydown`, (evt) => {
  if (evt.altKey && evt.keyCode === KEY_ARROW_LEFT && activeTemplate > 0) {
    showScreen(--activeTemplate);
  } else {
    if (evt.altKey && evt.keyCode === KEY_ARROW_RIGHT && activeTemplate < screenTemplates.length - 1) {
      showScreen(++activeTemplate);
    }
  }
});
