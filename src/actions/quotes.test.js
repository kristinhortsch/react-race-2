import { fetchQuotes, FETCH_QUOTES } from './quotes';

describe('actions test', () => {
  it('fetches chirps', () => {
    const action = fetchQuotes();

    expect(action).toEqual({ 
      type: FETCH_QUOTES,
      payload: Promise.resolve()
    });
  });
});
