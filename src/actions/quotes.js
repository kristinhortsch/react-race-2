import { getQuotes } from '../services/quotes';

export const FETCH_QUOTES = 'FETCH_QUOTES';

export const fetchQuotes = () => ({
  type: FETCH_QUOTES,
  payload: getQuotes()
});
