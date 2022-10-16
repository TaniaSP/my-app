import React, { PureComponent } from 'react';

class CounterComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleUp = this.handleUp.bind(this)
    this.handleDown = this.handleDown.bind(this)

  }
  handleUp() {
    this.setState((prev) => ({ count: prev.count + 1 }))
  }
  handleDown() {
    this.setState((prev) => ({ count: prev.count - 1 }))
  }
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <button onClick={this.handleUp}>+</button>
        value: {this.state.count}
        <button onClick={this.handleDown}>-</button>
      </div>
    );
  }
}

export default CounterComponent;