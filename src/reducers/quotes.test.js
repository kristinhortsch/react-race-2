import reducer from './quotes';

describe('quotes reducer', () => {
  it('handles fetching a quote', () => {
    const state = {
      quote: {
        text: ''
      }
    };

    const fetchedQuote = reducer(state, {
      type: 'FETCH_QUOTES',
      payload: { text: 'a quote' }
    });

    expect(fetchedQuote).toEqual({
      quote: { text: 'a quote' }
    });
  });
});
