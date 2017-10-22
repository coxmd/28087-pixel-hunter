export default (data = []) => {
  let strHeader = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>`;
  if(data.timer !== undefined){
    strHeader += `<h1 class="game__timer">${data.timer}</h1>`
  }
  if(data.lives !== undefined){
    strHeader += `<div class="game__lives">
    ${new Array(3 - data.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    ${new Array(data.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`)
      .join(``)}
    </div>
    `
  }
  strHeader += `</header>`;
  return strHeader;
}
