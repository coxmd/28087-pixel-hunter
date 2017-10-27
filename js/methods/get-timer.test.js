import assert from 'assert';
import Timer from './get-timer';

describe(`Timer`, () => {
  it(`should return 30`, () => {
    const timer = new Timer(30);
    assert(timer.time === 30);
  });

  it(`should return timer end`, () => {
    const timer = new Timer(1);
    assert(typeof timer.tick() === `string`);
  });

  it(`should return 29...25`, () => {
    let timer = new Timer(30);
    for (let i = 29; i > 25; i--) {
      assert(timer.tick() === i);
    }
  });
});
