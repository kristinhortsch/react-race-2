import { FETCH_QUOTES } from '../actions/quotes';

const initialState = {
  quote: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        quote: action.payload
      };
    default:
      return state;

  }
}
