import { fetchQuotes, FETCH_QUOTES } from './quotes';

jest.mock('../services/quotes');

describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchQuotes();

    expect(action).toEqual({ 
      type: FETCH_QUOTES,
      payload: Promise.resolve()
    });
  });
});
