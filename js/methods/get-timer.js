const getTimer = (value) => {
  return {
    VALUE: value,
    TIME: value,
    tick() {
      this.TIME--;
      if (this.TIME > 0) {
        return this.TIME;
      } else {
        return `Время истекло`;
      }
    },
  };
};

export default getTimer;
