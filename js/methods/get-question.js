const photos = [
  // People
  'http://i.imgur.com/1KegWPz.jpg',
  // Animals
  'https://i.imgur.com/DiHM5Zb.jpg',
  // Nature
  'http://i.imgur.com/DKR1HtB.jpg'
];

const pictures = [
  // People
  'https://k42.kn3.net/CF42609C8.jpg',
  // Animals
  'https://k42.kn3.net/D2F0370D6.jpg',
  // Nature
  'https://k32.kn3.net/5C7060EC5.jpg'
  ];

const questionTypes = {
  TWO_IMAGES: `game-1`,
  ONE_IMAGE: `game-2`,
  ONE_OF_THREE: `game-3`,
};

const questions = [
  {
    type: questionTypes.TWO_IMAGES,
    task: 'Угадайте для каждого изображения фото или рисунок?',
    src: {
      question1: pictures[0],
      question2: pictures[1]
    },
    answers: {
        question1: {
          photo: false,
          paint: true,
        },
        question2: {
          photo: false,
          paint: true,
        },
      }
  },

  {
    type: questionTypes.ONE_IMAGE,
    task: 'Угадай, фото или рисунок?',
    src: photos[0],
    answers: {
      question1: {
        photo: true,
        paint: false,
      },
    }
  },

  {
    type: questionTypes.ONE_OF_THREE,
    task: 'Найдите рисунок среди изображений',
    src: [pictures[2], photos[1], photos[2]],
    answers: {
      'option1': true,
      'option2': false,
      'option3': false,
    }
  },

  {
    type: questionTypes.TWO_IMAGES,
    task: 'Угадайте для каждого изображения фото или рисунок?',
    src: {
      question1: photos[2],
      question2: pictures[2]
    },
    answers: {
      question1: {
        photo: true,
        paint: false,
      },
      question2: {
        photo: false,
        paint: true,
      },
    }
  },

  {
    type: questionTypes.ONE_IMAGE,
    task: 'Угадай, фото или рисунок?',
    src: photos[1],
    answers: {
      question1: {
        photo: true,
        paint: false,
      },
    }
  },

  {
    type: questionTypes.ONE_OF_THREE,
    task: 'Найдите рисунок среди изображений',
    src: [photos[1], photos[0], pictures[0]],
    answers: {
      'option1': false,
      'option2': false,
      'option3': true,
    }
  },

];

export default () => {
  const questionIndex = Math.floor(Math.random() * questions.length);
  return questions[questionIndex];
}
