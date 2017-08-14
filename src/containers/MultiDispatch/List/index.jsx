import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FlipMove from 'react-flip-move';

import { selectAll } from 'store/domain/items/selectors';

class List extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  constructor(...args) {
    super(...args);

    console.log('List.constructor');
  }

  componentDidMount() {
    console.log('List.componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('List.componentWillReceiveProps');
  }

  componentDidUpdate() {
    console.log('List.componentDidUpdate');
  }

  render() {
    return (
      <FlipMove>
        {this.props.items.map(({ id }) => <div key={id}>{id}</div>)}
      </FlipMove>
    );
  }
}

function stateMapper(state) {
  return {
    items: selectAll(state),
  };
}

export default withRouter(connect(stateMapper)(List));
