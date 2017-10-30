export const QuestionType = {
  GAME1: `two-of-two`,
  GAME2: `tinder-like`,
  GAME3: `one-of-three`,
};

export const AnswerType = {
  painting: `painting`,
  photo: `photo`
};
AnswerType.paint = AnswerType.painting;

export const randomQuestion = (list) => {
  const questionIndex = Math.floor(Math.random() * list.length);
  return list[questionIndex];
};

const DATA_URL = `https://es.dump.academy/pixel-hunter/questions`;
export const loaderQuestions = fetch(DATA_URL);
