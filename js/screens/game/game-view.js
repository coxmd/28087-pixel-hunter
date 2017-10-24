import getHeader from '../header';
import getFooter from '../footer';
import stats from '../stats-line';

export default (question, data) => {
  let gameScreen = `${getHeader(data)}
      <div class="game">
    <p class="game__task">${question.task}</p>`;

  switch (question.type) {
    case `game-1`:
      gameScreen += `
    <form class="game__content">
      <div class="game__option">
        <img src="${question.src.question1}" alt="Option 1" width="468" height="458"/>
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${question.src.question2}" alt="Option 2" width="468" height="458"/>
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
      break;
    case `game-2`:
      gameScreen += `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${question.src}" alt="Option 1" width="705" height="455"/>
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;
      break;
    case `game-3`:
      gameScreen += `
    <form class="game__content  game__content--triple">
      <div class="game__option" data-option="option1">
        <img src="${question.src[0]}" alt="Option 1" width="304" height="455"/>
      </div>
      <div class="game__option  game__option--selected" data-option="option2">
        <img src="${question.src[1]}" alt="Option 2" width="304" height="455"/>
      </div>
      <div class="game__option" data-option="option3">
        <img src="${question.src[2]}" alt="Option 3" width="304" height="455"/>
      </div>
    </form>`;
      break;
  }

  gameScreen += `<div class="stats">${stats(data.answers)}</div>
</div>
${getFooter()}`;
  return gameScreen;
};
