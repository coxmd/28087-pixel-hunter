const SERVER_URL = `https://es.dump.academy/pixel-hunter/stats/:`;

export const loadResults = (name) => {
  return fetch(`${SERVER_URL}${name}`);
};

export const saveResults = (data, name) => {
  const requestSettings = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': `application/json`
    },
    method: `POST`
  };
  return fetch(`${SERVER_URL}${name}`, requestSettings);
};
