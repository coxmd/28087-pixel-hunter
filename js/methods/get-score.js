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
    ERROR: {
      POINTS: 0
    }
  },
  LIFE_BONUS: 50,
  QUESTIONS_NUM: 10,
};

const getScore = (answers, lives) => {
  if (answers.length < Config.QUESTIONS_NUM) {
    return -1;
  }
  let score = answers.reduce((sum, current) => sum + Config.ANSWER_RATE[current].POINTS, 0);
  score += lives * Config.LIFE_BONUS;
  return score;
};

export default getScore;
