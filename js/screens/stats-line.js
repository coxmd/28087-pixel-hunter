export default (answers) => {
  const answerCssClass = {
    SLOW: `slow`,
    NORMAL: `correct`,
    FAST: `fast`,
    ERROR: `wrong`,
  };
  let statsLine = `<ul class="stats">`;
  statsLine += answers.reduce((str, current) => str + `<li class="stats__result stats__result--${answerCssClass[current]}"></li>`, ``);
  if(answers.length < 10){
    const unknownAnswers = new Array(10 - answers.length)
      .fill(`<li class="stats__result stats__result--unknown"></li>`)
      .join(``);
    statsLine = statsLine.concat(unknownAnswers);
  }
  statsLine += `</ul>`;
  return statsLine;
}
