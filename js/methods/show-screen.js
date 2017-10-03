const mainContainer = document.querySelector(`main.central`);

const showScreen = (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen);
};
export default showScreen;
