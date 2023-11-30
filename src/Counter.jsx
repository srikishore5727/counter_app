import React, { Component } from 'react';
import '../src/counter.css'

export class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <h1 className="head">Counter App</h1>
        <br />
        <p id="value">{this.state.count}</p>
        <br />
        <div id="operations">
          <button id="increment" onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
          <button id="decrement" onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
          <button id="reset" onClick={() => this.setState({ count: 0 })}>Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
