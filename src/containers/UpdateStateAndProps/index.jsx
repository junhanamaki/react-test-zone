import React, { Component } from 'react';

import Counter from './Counter';

export default class UpdateStateAndProps extends Component {
  state = {
    color: 'yellow',
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

  handleUpdate = value => {
    this.setState({ color: value % 2 === 0 ? 'yellow' : 'grey' })
  }

  render() {
    return (
      <div>
        <Counter
          initialValue={0}
          color={this.state.color}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
