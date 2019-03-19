const request = (path, method) => {
  return fetch(`${process.env.API_URL}${path}`, {
    method,
  })
    .then(res=> [res.ok, res.json()])
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const get = path => request(path, 'GET');
