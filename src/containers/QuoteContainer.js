import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchQuotes } from '../actions/quotes';
import Quote from '../components/Quote';
import { getQuote } from '../selectors/quotes';

export class QuoteContainer extends PureComponent {
  static propTypes = {
    fetch: PropTypes.func.isRequired,
    quote: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };
  
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Quote quote={this.props.quote} onClick={this.props.onClick} />
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchQuotes());
  },
  onClick() {
    return dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(QuoteContainer);
