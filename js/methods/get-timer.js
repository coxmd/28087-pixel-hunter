class Timer {
  constructor(time) {
    this._timeLimit = time;
    this.time = time;
    this.message = `Время истекло`;
  }

  tick() {
    this.time--;
    if (this.time === 0) {
      return this.message;
    }
    return this.time;
  }

  reset() {
    this.time = this._timeLimit;
  }
}

export default Timer;
