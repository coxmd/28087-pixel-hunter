const getScore = (answers, lives) => {
  const Config = {
    ANSWER_RATE: {
      SLOW: {
        POINTS: 50,
        TIME_LIMIT: 30
      },
      NORMAL: {
        POINTS: 100,
        TIME_LIMIT: 20
      },
      FAST: {
        POINTS: 150,
        TIME_LIMIT: 10
      },
    },
    LIFE_BONUS: 50,
    ANSWER_TIME_LIMIT: 30,
    ERROR_LIMIT: 3,
    QUESTIONS_NUM: 10,
  };

  if (answers.length < Config.QUESTIONS_NUM) {
    return -1;
  }

  let score = 0;
  let errors = 0;

  for (const answer of answers) {

    if (answer.VALUE && answer.TIME <= Config.ANSWER_TIME_LIMIT && errors <= Config.ERROR_LIMIT) {

      let answerSpeed;
      for (const k in Config.ANSWER_RATE) {
        if (answer.TIME <= Config.ANSWER_RATE[k].TIME_LIMIT) {
          answerSpeed = k;
        }
      }
      score += Config.ANSWER_RATE[answerSpeed].POINTS;
    } else if (errors < Config.ERROR_LIMIT) {

      errors++;
    } else {
      return -1;
    }
  }

  if (lives > 0) {
    score += lives * Config.LIFE_BONUS;
  }
  return score;
};

export default getScore;
