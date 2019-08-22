import React, { Component } from "react";
import Counter from "./counter";

class BigCounter extends Component {
 
  render() {
    return (
      <div>

        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            id={counter.id}
            key={counter.id}
            value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }


}

export default BigCounter;
