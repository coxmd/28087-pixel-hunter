const TIME_LIMIT = 30;

const getTimer = (value = TIME_LIMIT) => {
  return {
    VALUE: value > 0 ? value : `Время истекло`,
    tick() {
      return getTimer(value - 1);
    },
    reset() {
      return getTimer(TIME_LIMIT);
    }
  };
};

export default getTimer;
