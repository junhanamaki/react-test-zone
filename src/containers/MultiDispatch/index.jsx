import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import List from './List';
import { add } from 'store/domain/items/actions';
import { selectAll } from 'store/domain/items/selectors';

class MultiDispatch extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);

    console.log('Parent.constructor');
  }

  componentDidMount() {
    console.log('Parent.componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('Parent.componentWillReceiveProps');
  }

  componentDidUpdate() {
    console.log('Parent.componentDidUpdate');
  }

  handleClick = () => {
    const { props: { dispatch }, input: { value } } = this;

    for (let i = 0; i < value; ++i) {
      dispatch(add());
    }
  };

  render() {
    return (
      <div>
        <div>
          <span>How many items?</span>
          <input ref={input => this.input = input} defaultValue={1} />
        </div>
        <div>
          <button onClick={this.handleClick}>Add items</button>
        </div>
        <div>
          <span>Current count: {this.props.items.length}</span>
          <List />
        </div>
      </div>
    );
  }
}

function stateMapper(state) {
  return {
    items: selectAll(state),
  };
}

export default withRouter(connect(stateMapper)(MultiDispatch));
