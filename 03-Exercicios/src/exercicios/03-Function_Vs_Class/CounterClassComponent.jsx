import React, { Component } from "react";

export default class CounterClassComponent extends Component {
  constructor(props) {
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const { message } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <h2>Count: {count}</h2>
        <button className="button" onClick={() => this.increase}>
          Add One
        </button>
      </div>
    );
  }
}
