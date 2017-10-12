import assert from 'assert';
import getTimer from './get-timer';

describe(`Timer`, () => {
  it(`should return 30`, () => {
    const timer = getTimer(30);
    assert(timer.TIME === 30);
  });

  it(`should return timer end`, () => {
    const timer = getTimer(1);
    assert(typeof timer.tick() === `string`);
  });

  it(`should return 29...25`, () => {
    let timer = getTimer(30);
    for (let i = 29; i > 25; i--) {
      assert(timer.tick() === i);
    }
  });
});
