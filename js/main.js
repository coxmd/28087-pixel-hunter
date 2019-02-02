(function () {
'use strict';

const mainContainer = document.querySelector(`main.central`);

var showScreen = (screen) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(screen.element);
};

var createElement = (element) => {
  const container = document.createElement(`div`);
  container.innerHTML = element;
  return container;
};

class AbstractView {

  get template() {
    throw new Error(`You have to define template for view`);
  }

  render() {
    return createElement(this.template.trim());
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}

var data = {
  description: `<sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.`
};

var getFooter = () => {
  return `<footer class="footer">
    <a href="https://htmlacademy.ru" class="social-link social-link--academy">HTML Academy</a>
    <span class="footer__made-in">Сделано в <a href="https://htmlacademy.ru" class="footer__link">HTML Academy</a> &copy; 2016</span>
    <div class="footer__social-links">
      <a href="https://twitter.com/htmlacademy_ru" class="social-link  social-link--tw">Твиттер</a>
      <a href="https://www.instagram.com/htmlacademy/" class="social-link  social-link--ins">Инстаграм</a>
      <a href="https://www.facebook.com/htmlacademy" class="social-link  social-link--fb">Фэйсбук</a>
      <a href="https://vk.com/htmlacademy" class="social-link  social-link--vk">Вконтакте</a>
    </div>
  </footer>`;
};

class InrtoView extends AbstractView {
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

class IntroScreen {
  constructor() {
    this.view = new InrtoView();
  }

  init() {
    showScreen(this.view);
    this.view.goNext = () => {
      Application.showGreeting();
    };
  }
}

var introScreen = new IntroScreen();

var data$1 = {
  description: `<h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>
      <p>Правила игры просты.<br/>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br/>
        Задача кажется тривиальной, но не думай, что все так просто.<br/>
        Фотореализм обманчив и коварен.<br/>
        Помни, главное — смотреть очень внимательно.</p>`,
};

class GreetingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"/></div>
    <h1 class="greeting__asterisk">*</h1>
    <div class="greeting__challenge">${data$1.description}</div>
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

class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
  }

  init() {
    showScreen(this.view);
    this.view.goNext = () => {
      Application.showRules();
    };
  }
}

var greetingScreen = new GreetingScreen();

var data$2 = {
  title: `Правила`,
  description: `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"/> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt=""/>.<br/>
      Фотографиями или рисунками могут быть оба изображения.<br/>
      На каждую попытку отводится 30 секунд.<br/>
      Ошибиться можно не более 3 раз.<br/>
      <br/>
      Готовы?`,
  form: {
    placeholder: `Ваше Имя`,
    button: `Go!`
  }
};

var getHeader = (data = []) => {
  let strHeader = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back"/>
        <img src="img/logo_small.svg" width="101" height="44"/>
      </button>
    </div>`;
  if (typeof (data.timer) !== `undefined`) {
    strHeader += `<h1 class="game__timer">${data.timer}</h1>`;
  }
  if (typeof (data.lives) !== `undefined`) {
    strHeader += `<div class="game__lives">
    ${new Array(3 - data.lives)
      .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32"/>`)
      .join(``)}
    ${new Array(data.lives)
      .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32"/>`)
      .join(``)}
    </div>`;
  }
  strHeader += `</header>`;
  return strHeader;
};

class RulesView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `${getHeader()}
<div class="rules">
    <h1 class="rules__title">${data$2.title}</h1>
    <p class="rules__description">${data$2.description}</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${data$2.form.placeholder}"/>
      <button class="rules__button  continue" type="submit" disabled>${data$2.form.button}</button>
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

class RulesScreen {
  constructor() {
    this.view = new RulesView();
  }

  init() {
    showScreen(this.view);

    const nextBtn = this.view.element.querySelector(`.rules__button`);
    this.view.onInput = (evt) => {
      nextBtn.disabled = evt.target.value === ``;
    };

    this.view.goNext = () => {
      Application.userName = this.view.element.querySelector(`.rules__input`).value;
      Application.showGame();
    };

    this.view.goBack = () => {
      Application.showGreeting();
    };
  }
}

var rulesScreen = new RulesScreen();

var stats = (answers) => {
  const answerCssClass = {
    SLOW: `slow`,
    NORMAL: `correct`,
    FAST: `fast`,
    ERROR: `wrong`,
  };
  let statsLine = `<ul class="stats">`;
  statsLine += answers.reduce((str, current) => str + `<li class="stats__result stats__result--${answerCssClass[current]}"></li>`, ``);
  if (answers.length < 10) {
    const unknownAnswers = new Array(10 - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``);
    statsLine = statsLine.concat(unknownAnswers);
  }
  statsLine += `</ul>`;
  return statsLine;
};

const QuestionType = {
  GAME1: `two-of-two`,
  GAME2: `tinder-like`,
  GAME3: `one-of-three`,
};

const AnswerType = {
  painting: `painting`,
  photo: `photo`
};
AnswerType.paint = AnswerType.painting;

const randomQuestion = (questionList) => {
  questionList.sort(() => Math.random() - 0.5);
  return questionList.pop();
};

const DATA_URL = `https://es.dump.academy/pixel-hunter/questions`;
const loaderQuestions = fetch(DATA_URL);

class GameView extends AbstractView {
  constructor(question, data) {
    super();
    this.question = question;
    this.data = data;
  }

  get template() {
    let gameScreen = `${getHeader(this.data)}
      <div class="game">
    <p class="game__task">${this.question.question}</p>`;

    switch (this.question.type) {
      case QuestionType.GAME1:
        gameScreen += `<form class="game__content">`;
        gameScreen += this.question.answers.reduce((str, current, i) => str + `
<div class="game__option">
        <img src="${current.image.url}" alt="Option ${i}" width="${current.image.width}" height="${current.image.height}"/>
        <label class="game__answer game__answer--photo">
          <input name="question${i}" type="radio" value="photo"/>
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question${i}" type="radio" value="paint"/>
          <span>Рисунок</span>
        </label>
      </div>`, ``);
        gameScreen += `</form>`;
        break;
      case QuestionType.GAME2:
        const oneImage = this.question.answers[0].image;
        gameScreen += `
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${oneImage.url}" alt="Option 1" width="${oneImage.width}" height="${oneImage.height}"/>
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
      case QuestionType.GAME3:
        let gameOptions = ``;
        let isPhoto = 0;
        this.question.answers.forEach((current, i) => {
          gameOptions += `<div class="game__option" data-option="${i}">
<img src="${current.image.url}" alt="Option ${i}" width="${current.image.width}" height="${current.image.height}"/>
      </div>`;
          if (current.type === AnswerType.photo) {
            isPhoto++;
          }
        });
        gameScreen += `<form class="game__content game__content--triple" data-target="${isPhoto === 1 ? AnswerType.photo : AnswerType.painting}">
${gameOptions}</form>`;
        break;
    }

    gameScreen += `<div class="stats">${stats(this.data.answers)}</div>
</div>
${getFooter()}`;
    return gameScreen;
  }

  bind() {
    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };
    this.element.querySelector(`.game__content`).onclick = (evt) => {
      this.onAnswerClick(this.element, evt);
    };
  }

  goBack() {
  }

  onAnswerClick() {
  }
}

var getAnswer = (value, time) => {
  if (!value) {
    return `ERROR`;
  } else if (time > 20) {
    return `FAST`;
  } else if (time > 10) {
    return `NORMAL`;
  } else {
    return `SLOW`;
  }
};

const resize = (frame, given) => {
  const image = {
    width: given.width,
    height: given.height,
  };
  if (image.height > frame.height) {
    image.height = frame.height;
    image.width = image.height * given.width / given.height;
  }
  if (image.width > frame.width) {
    image.width = frame.width;
    image.height = image.width * given.height / given.width;
  }
  return image;
};

var checkImageSizes = (screen) => {
  const gameImages = screen.querySelectorAll(`.game__option`);
  gameImages.forEach(function (item) {
    const frameSizes = {
      width: item.clientWidth,
      height: item.clientHeight,
    };
    const imageElement = item.querySelector(`img`);
    const image = new Image();
    image.src = imageElement.src;
    image.onload = function () {
      const imageSize = {
        width: image.width,
        height: image.height,
      };
      const imageNewSize = resize(frameSizes, imageSize);
      imageElement.width = imageNewSize.width;
      imageElement.height = imageNewSize.height;
    };
  });
};

class Timer {
  constructor(time) {
    this._timeLimit = time;
    this.time = time;
    this.message = `Время истекло`;
  }

  tick() {
    this.time--;
    if (this.time === 0) {
      return this.message;
    }
    return this.time;
  }

  reset() {
    this.time = this._timeLimit;
  }
}

class GameScreen {
  init() {
    this.lives = 3;
    this.answers = [];
    this.questions = 10;
    this.timer = new Timer(30);
    clearInterval(this._currTimer);
    this._questionList = Application.questionList.slice();
    this.next();
  }

  addAnswer(answerValue) {
    const newAnswer = getAnswer(answerValue, this.timer.time);
    this.timer.reset();
    clearInterval(this._currTimer);
    this.answers.push(newAnswer);
    this.questions--;
    if (newAnswer === `ERROR`) {
      this.lives--;
    }
  }

  timeControl(screen) {
    const timeContainer = screen.element.querySelector(`.game__timer`);
    this._currTimer = setInterval(() => {
      if (this.timer.time === 0) {
        this.addAnswer(false);
        this.next();
      }
      timeContainer.innerText = this.timer.tick();
      if (this.timer.time === 5) {
        timeContainer.classList.add(`is-animated`);
      }
    }, 1000);
  }

  next() {
    if (this.questions > 0 && this.lives >= 0) {
      const currQuestion = randomQuestion(this._questionList);
      const screen = new GameView(currQuestion, {lives: this.lives, answers: this.answers, timer: this.timer.time});
      this.timeControl(screen);

      showScreen(screen);
      checkImageSizes(screen.element);

      screen.goBack = () => {
        // eslint-disable-next-line
        if (confirm(`Вся игра будет потеряна. Уверены?`)) {
          Application.showGreeting();
        }
      };

      screen.onAnswerClick = (element, evt) => {
        const answerContainer = element.querySelector(`.game__content`);
        switch (currQuestion.type) {
          case QuestionType.GAME1:
            const answerItems = answerContainer.querySelectorAll(`.game__answer :checked`);
            if (answerItems.length === 2) {
              this.addAnswer(AnswerType[answerItems[0].value] === currQuestion.answers[0].type && AnswerType[answerItems[1].value] === currQuestion.answers[1].type);
              this.next();
            }
            break;
          case QuestionType.GAME2:
            if (evt.target.name === `question1`) {
              this.addAnswer(currQuestion.answers[0].type === AnswerType[evt.target.value]);
              this.next();
            }
            break;
          case QuestionType.GAME3:
            const findTarget = answerContainer.dataset.target;
            if (evt.target.classList.contains(`game__option`)) {
              this.addAnswer(currQuestion.answers[evt.target.dataset.option].type === findTarget);
              this.next();
            }
            break;
        }
      };
    } else {
      const statsData = {
        lives: this.lives,
        answers: this.answers,
      };
      Application.showStats(statsData);
    }
  }
}

var gameScreen = new GameScreen();

var data$3 = {
  title: {
    win: `Победа!`,
    lost: `Поражение`
  },
  bonus: {
    speed: `Бонус за скорость`,
    lives: `Бонус за жизни`,
    fine: `Штраф за медлительность`
  },
};

const Config = {
  LIFE_BONUS: 50,
  QUESTIONS_NUM: 10,
  ANSWER_RATE: 100,
  FAST_BONUS: 50,
  SLOW_FINE: 50,
};

const getScore = (answers, lives) => {
  if (answers.length < Config.QUESTIONS_NUM) {
    return -1;
  }

  let score = {
    normal: 0,
    fastBonus: 0,
    fine: 0,
    livesBonus: 0,
    total: 0
  };
  score = answers.reduce((result, current) => {
    if (current !== `ERROR`) {
      result.normal += Config.ANSWER_RATE;
      result.total += Config.ANSWER_RATE;

      switch (current) {
        case `SLOW`:
          result.fine += Config.SLOW_FINE;
          result.total -= Config.SLOW_FINE;
          break;
        case `FAST`:
          result.fastBonus += Config.FAST_BONUS;
          result.total += Config.FAST_BONUS;
          break;
      }
    }
    return result;
  }, score);

  score.livesBonus = lives * Config.LIFE_BONUS;
  score.total += score.livesBonus;
  return score;
};

class StatsView extends AbstractView {
  constructor(game = {}) {
    super();
    this.answers = typeof game.answers === `object` ? game.answers : [];
    this.lives = typeof game.lives === `number` ? game.lives : -1;
  }


  get template() {
    return `${getHeader()}<div class="result">Загрузка результатов...</div>${getFooter()}`;
  }


  showResults(resultsData) {
    const lastResult = resultsData[resultsData.length - 1];
    const isWin = lastResult.answers.length === 10 && lastResult.lives >= 0;
    const content = resultsData.reverse().reduce((result, current, i) => {
      if (current.answers.length === 10 && current.lives >= 0) {
        const score = getScore(current.answers, current.lives);
        return result + `
<table class="result__table">
      <tr>
        <td class="result__number">${i + 1}</td>
        <td colspan="2">
          ${stats(current.answers)}
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${score.normal}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data$3.bonus.speed}:</td>
        <td class="result__extra">${score.fastBonus / 50}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${score.fastBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data$3.bonus.lives}:</td>
        <td class="result__extra">${current.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${score.livesBonus}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">${data$3.bonus.fine}:</td>
        <td class="result__extra">${score.fine / 50}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${-score.fine}</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${score.total}</td>
      </tr>
      </table>
`;
      } else {
        return result + `
<table class="result__table">
      <tr>
        <td class="result__number">${i + 1}</td>
        <td>
          ${stats(current.answers)}
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
      </table>
`;
      }
    }, ``);

    this.resultElement.innerHTML = `<h1>${isWin ? data$3.title.win : data$3.title.lost}</h1>
<table class="result__table">${content}</table>`;
  }

  showErrorScreen() {
    this.resultElement.innerHTML = `<h1>Не удалось загрузить данные статистики :(</h1>`;
  }

  bind() {
    this.resultElement = this.element.querySelector(`.result`);

    this.element.querySelector(`.back`).onclick = (evt) => {
      evt.preventDefault();
      this.goBack();
    };
  }


  goBack() {
  }
}

const SERVER_URL = `https://es.dump.academy/pixel-hunter/stats/:`;

const loadResults = (name) => {
  return fetch(`${SERVER_URL}${name}`);
};

const saveResults = (data, name) => {
  const requestSettings = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };
  return fetch(`${SERVER_URL}${name}`, requestSettings);
};

class StatsScreen {
  init(state) {
    this.view = new StatsView(state);
    showScreen(this.view);
    this.view.goBack = () => {
      Application.showGreeting();
    };

    if (typeof Application.userName !== `undefined`) {
      loadResults(Application.userName).then((response) => response.json()).then((results) => this.view.showResults(results)).catch(() => this.view.showErrorScreen());
    } else {
      this.view.showErrorScreen();
    }
  }
}

var statsScreen = new StatsScreen();

const ControllerId = {
  INTRO: ``,
  GREETING: `greeting`,
  RULES: `rules`,
  GAME: `game`,
  STATS: `stats`
};

const loadState = (dataString) => {
  try {
    return JSON.parse(dataString);
  } catch (e) {
    return ``;
  }
};

const routes = {
  [ControllerId.INTRO]: introScreen,
  [ControllerId.GREETING]: greetingScreen,
  [ControllerId.RULES]: rulesScreen,
  [ControllerId.GAME]: gameScreen,
  [ControllerId.STATS]: statsScreen
};

class Application {
  static init() {
    introScreen.init();
    const onHashChange = () => {
      const hashValue = location.hash.replace(`#`, ``);
      const [id, data] = hashValue.split(`?`);
      this.changeHash(id, data);
    };
    window.addEventListener(`hashchange`, onHashChange);

    loaderQuestions.then((response) => {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        return [];
      }
      throw new Error(`Неизвестный статус: ${response.status} ${response.statusText}`);
    }).then((responseData) => {
      this.questionList = responseData;
      onHashChange();
      if (location.hash.replace(`#`, ``) === ``) {
        this.showGreeting();
      }
    });
  }

  static changeHash(id, data) {
    const controller = routes[id];

    if (controller) {
      controller.init(loadState(data));
    }
  }

  static showIntro() {
    location.hash = ControllerId.INTRO;
  }

  static showGreeting() {
    location.hash = ControllerId.GREETING;
  }

  static showRules() {
    location.hash = ControllerId.RULES;
  }

  static showGame() {
    location.hash = ControllerId.GAME;
  }

  static showStats(state) {
    saveResults(state, this.userName).then(() => {
      location.hash = ControllerId.STATS;
    });
  }

}

Application.init();

}());

//# sourceMappingURL=main.js.map
