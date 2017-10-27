const mainContainer = document.querySelector(`main.central`);

export default (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen.element);
};
