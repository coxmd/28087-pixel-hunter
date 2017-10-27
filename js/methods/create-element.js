export default (element) => {
  const container = document.createElement(`div`);
  container.innerHTML = element;
  return container;
};
