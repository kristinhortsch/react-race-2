export const getQuotes = () => {
  return fetch(`${process.env.API_URL}/random`)
    .then(res => res.json());
};
