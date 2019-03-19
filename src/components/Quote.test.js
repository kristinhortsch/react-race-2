import React from 'react';
import renderer from 'react-test-renderer';
import Quote from './Quote';

describe('Quote', () => {
  it('matches a snapshot', () => {
    const quote = {
      text: 'some quote'
    };

    const onClick = jest.fn();
    const tree = renderer.create(
      <Quote onClick={onClick} quote={quote}/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
