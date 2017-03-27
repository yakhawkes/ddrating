import React, { PropTypes } from 'react';
import { Ratings } from '../api/ratings.js';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedClassName: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ selectedClassName: 'selected' });
    Ratings.insert({
      score: this.props.cusomerScore
    });
  }
  render() {
    return (
      <a href="" onClick={this.handleClick}>
        <div className={`floatleft mood ${this.state.selectedClassName}`} >
          {this.props.name}
        </div>
      </a>

    );
  }
}

Mood.propTypes = {
  name: PropTypes.string.isRequired,
  cusomerScore: PropTypes.number.isRequired,
};
