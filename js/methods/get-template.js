const getTemplate = (element) => {
  const container = document.createElement(`div`);
  container.innerHTML = element;
  return container;
};

export default getTemplate;
