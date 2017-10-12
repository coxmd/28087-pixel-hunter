import assert from 'assert';
import getScore from './get-score';

const defaultAnswers = [`NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`, `NORMAL`]; // 100 points

describe(`Score counter`, () => {

  describe(`Answer scores check`, () => {
    it(`should return 1000: all normal & no lives bonus`, () => {
      assert(getScore(defaultAnswers, 0) === 1000);
    });

    it(`should return 1500: all fast & no lives bonus`, () => {
      const answers = [`FAST`, `FAST`, `FAST`, `FAST`, `FAST`, `FAST`, `FAST`, `FAST`, `FAST`, `FAST`];
      assert(getScore(answers, 0) === 1500);
    });

    it(`should return 500: all slow & no lives bonus`, () => {
      const answers = [`SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`];
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
      const answers = [`FAST`, `FAST`, `NORMAL`, `NORMAL`, `NORMAL`, `SLOW`, `SLOW`, `ERROR`, `ERROR`, `ERROR`];
      assert(getScore(answers, 0) === 700);
    });
    it(`should return 800: 2 fast(300) + 3 normal (300) + 2 slow (100) & 3 errors + 2 lives`, () => {
      const answers = [`FAST`, `FAST`, `NORMAL`, `NORMAL`, `NORMAL`, `SLOW`, `SLOW`, `ERROR`, `ERROR`, `ERROR`];
      assert(getScore(answers, 2) === 800);
    });
  });

  describe(`Errors`, () => {
    it(`should return -1 if less than 10 answers`, () => {
      const answers = [`SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`, `SLOW`]; // 9 elements
      assert(getScore(answers, 1) === -1);
    });
  });

});
