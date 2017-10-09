import assert from 'assert';
import getScore from './get-score';

const defaultAnswers = [ // 100 points
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true},
  {TIME: 15, VALUE: true}
];

describe(`Score counter`, () => {

  describe(`Answer scores check`, () => {
    it(`should return 1000: all normal & no lives bonus`, () => {
      assert(getScore(defaultAnswers, 0) === 1000);
    });

    it(`should return 1500: all fast & no lives bonus`, () => {
      const answers = [
        {TIME: 1, VALUE: true},
        {TIME: 2, VALUE: true},
        {TIME: 3, VALUE: true},
        {TIME: 4, VALUE: true},
        {TIME: 5, VALUE: true},
        {TIME: 6, VALUE: true},
        {TIME: 7, VALUE: true},
        {TIME: 8, VALUE: true},
        {TIME: 9, VALUE: true},
        {TIME: 10, VALUE: true}
      ];
      assert(getScore(answers, 0) === 1500);
    });

    it(`should return 500: all slow & no lives bonus`, () => {
      const answers = [
        {TIME: 21, VALUE: true},
        {TIME: 22, VALUE: true},
        {TIME: 23, VALUE: true},
        {TIME: 24, VALUE: true},
        {TIME: 25, VALUE: true},
        {TIME: 26, VALUE: true},
        {TIME: 27, VALUE: true},
        {TIME: 28, VALUE: true},
        {TIME: 29, VALUE: true},
        {TIME: 30, VALUE: true}
      ];
      assert(getScore(answers, 0) === 500);
    });
  });

  describe(`Lives bonus check`, () => {
    it(`should return 1000 (no lives bonus)`, () => {
      assert(getScore(defaultAnswers, 0) === 1000);
    });
    it(`should return 1050 (1 bonus)`, () => {
      assert(getScore(defaultAnswers, 1) === 1050);
    });
    it(`should return 1150 (3 bonus)`, () => {
      assert(getScore(defaultAnswers, 3) === 1150);
    });
  });

  describe(`Combo`, () => {
    it(`should return 700: 2 fast(300) + 3 normal (300) + 2 slow (100) & 3 errors`, () => {
      const answers = [
        {TIME: 5, VALUE: true},
        {TIME: 5, VALUE: true},
        {TIME: 35, VALUE: false},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: true},
        {TIME: 25, VALUE: true},
        {TIME: 25, VALUE: true},
        {TIME: 21, VALUE: false},
        {TIME: 31, VALUE: true}
      ];
      assert(getScore(answers, 0) === 700);
    });
  });

  describe(`Errors`, () => {
    it(`should return -1 if less than 10 answers`, () => {
      const answers = [
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: false}
      ];
      assert(getScore(answers, 1) === -1);
    });
    it(`should return -1 if more than 3 error`, () => {
      const answers = [
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: false}
      ];
      assert(getScore(answers, 2) === -1);
    });
    it(`should return -1 if more than 3 error: 3 errors and 1 time over`, () => {
      const answers = [
        {TIME: 15, VALUE: true},
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: false},
        {TIME: 15, VALUE: false},
        {TIME: 31, VALUE: true}
      ];
      assert(getScore(answers, 2) === -1);
    });
  });

});
