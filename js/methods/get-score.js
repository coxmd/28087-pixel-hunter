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

export default getScore;
