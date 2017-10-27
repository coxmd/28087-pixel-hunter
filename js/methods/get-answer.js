export default (value, time) => {
  if (!value) {
    return `ERROR`;
  } else if (time > 20) {
    return `FAST`;
  } else if (time > 10) {
    return `NORMAL`;
  } else {
    return `SLOW`;
  }
};
