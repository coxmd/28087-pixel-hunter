const answerCssClass = {
  SLOW: `slow`,
  NORMAL: `correct`,
  FAST: `fast`,
  ERROR: `wrong`,
};

const renderLines = (answers) => {
  return answers.reduce((str, current) => `${str}<li class="stats__result stats__result--${answerCssClass[current]}"></li>`, ``);
};

export default (answers) => {
  const unknownAnswers = (answers.length < 10) ? new Array(10 - answers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``) : ``;
  return `<ul class="stats">${renderLines(answers)}${unknownAnswers}</ul>`;
};
