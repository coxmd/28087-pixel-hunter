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

export const questions = [{
  "type": "tinder-like",
  "question": "Угадай, фото или рисунок?",
  "answers": [{"image": {"url": "https://k42.kn3.net/D2F0370D6.jpg", "width": 705, "height": 455}, "type": "painting"}]
}, {
  "type": "one-of-three",
  "question": "Найдите рисунок среди изображений",
  "answers": [{
    "image": {"url": "http://i.imgur.com/Jvzh3pk.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {
    "image": {"url": "http://i.imgur.com/zHRZW1C.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {"image": {"url": "https://k35.kn3.net/2B925F44D.jpg", "width": 304, "height": 455}, "type": "painting"}]
}, {
  "type": "one-of-three",
  "question": "Найдите рисунок среди изображений",
  "answers": [{
    "image": {"url": "https://i.redd.it/l08jq66vul2y.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {
    "image": {"url": "http://i.imgur.com/mz0MSsy.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {"image": {"url": "https://k43.kn3.net/1C4F7F5D5.jpg", "width": 304, "height": 455}, "type": "painting"}]
}, {
  "type": "one-of-three",
  "question": "Найдите рисунок среди изображений",
  "answers": [{
    "image": {"url": "https://i.redd.it/bj70zjl196kx.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {
    "image": {"url": "https://i.redd.it/n1vqglrr0o2y.jpg", "width": 304, "height": 455},
    "type": "photo"
  }, {"image": {"url": "https://k37.kn3.net/695A61B3C.jpg", "width": 304, "height": 455}, "type": "painting"}]
}, {
  "type": "two-of-two",
  "question": "Угадайте для каждого изображения фото или рисунок?",
  "answers": [{
    "image": {"url": "https://i.redd.it/0uvt7jy0hy2y.jpg", "width": 468, "height": 458},
    "type": "photo"
  }, {"image": {"url": "https://k43.kn3.net/27AC45B8B.jpg", "width": 468, "height": 458}, "type": "painting"}]
}, {
  "type": "tinder-like",
  "question": "Угадай, фото или рисунок?",
  "answers": [{"image": {"url": "https://i.redd.it/apoalsgb702y.jpg", "width": 705, "height": 455}, "type": "photo"}]
}, {
  "type": "tinder-like",
  "question": "Угадай, фото или рисунок?",
  "answers": [{"image": {"url": "https://k41.kn3.net/CF684A85A.jpg", "width": 705, "height": 455}, "type": "painting"}]
}, {
  "type": "two-of-two",
  "question": "Угадайте для каждого изображения фото или рисунок?",
  "answers": [{
    "image": {"url": "https://k38.kn3.net/AD92BA712.jpg", "width": 468, "height": 458},
    "type": "painting"
  }, {"image": {"url": "https://k32.kn3.net/5C7060EC5.jpg", "width": 468, "height": 458}, "type": "painting"}]
}, {
  "type": "tinder-like",
  "question": "Угадай, фото или рисунок?",
  "answers": [{"image": {"url": "http://i.imgur.com/UIHVp0P.jpg", "width": 705, "height": 455}, "type": "photo"}]
}, {
  "type": "two-of-two",
  "question": "Угадайте для каждого изображения фото или рисунок?",
  "answers": [{
    "image": {"url": "http://i.imgur.com/dWTKNtv.jpg", "width": 468, "height": 458},
    "type": "photo"
  }, {"image": {"url": "https://k43.kn3.net/956572A45.jpg", "width": 468, "height": 458}, "type": "painting"}]
}];

export const randomQuestion = () => {
  const questionIndex = Math.floor(Math.random() * questions.length);
  return questions[questionIndex];
};
