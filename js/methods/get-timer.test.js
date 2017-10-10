import assert from 'assert';
import getTimer from './get-timer';

describe(`Timer`, () => {
  it(`should return 30 (max time)`, () => {
    const timer = getTimer();
    assert(timer.VALUE === 30);
  });

  it(`should return timer end`, () => {
    const timer = getTimer(1);
    assert(timer.tick().VALUE === `Время истекло`);
  });

  it(`should return timer end`, () => {
    const timer = getTimer(`Время истекло`);
    assert(timer.tick().VALUE === `Время истекло`);
  });

  it(`should return 29...25`, () => {
    for (let i = 30; i > 25; i--) {
      let timer = getTimer(i);
      assert(timer.tick().VALUE === (i - 1));
    }
  });
});
