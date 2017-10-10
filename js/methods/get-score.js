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
  QUESTIONS_NUM: 10,
};

const getScore = (answers, lives) => {
  if (answers.length < Config.QUESTIONS_NUM) {
    return -1;
  }

  let score = 0;

  for (const answer of answers) {

    if (answer.VALUE) {

      let answerSpeed;
      for (const k in Config.ANSWER_RATE) {
        if (answer.TIME <= Config.ANSWER_RATE[k].TIME_LIMIT) {
          answerSpeed = k;
        }
      }
      if (answerSpeed) {
        score += Config.ANSWER_RATE[answerSpeed].POINTS;
      }
    }
  }

  if (lives > 0) {
    score += lives * Config.LIFE_BONUS;
  }
  return score;
};

export default getScore;
