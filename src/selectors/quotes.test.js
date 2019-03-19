import { getQuote } from '../selectors/quotes';

describe('selectors test', () => {
  it('can get a quote', () => {
    const state = {
      quote: {
        text: 'a sentence'
      }
    };

    const fetchedQuote = getQuote(state);

    expect(fetchedQuote).toEqual({ text: 'a sentence' });
  });
});
