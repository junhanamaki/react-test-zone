import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Counter extends Component {
  static propTypes = {
    initialValue: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  };

  constructor(...args) {
    super(...args);

    const { initialValue } = args[0];

    this.state = { value: initialValue };

    console.log('Counter.constructor');
  }

  componentDidMount() {
    console.log('Counter.componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('Counter.componentWillReceiveProps');
  }

  componentDidUpdate() {
    console.log('Counter.componentDidUpdate');
  }

  handleClick = () => {
    const value = this.state.value + 1;

    this.props.onUpdate(value);

    this.setState({ value });
  };

  render() {
    const { state: { value }, props: { color } } = this;

    return (
      <div>
        <label style={{ backgroundColor: color }}>
          Current count: {value}
        </label>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}
