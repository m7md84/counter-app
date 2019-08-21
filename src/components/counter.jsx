import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
            {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul> */}
      </div>
    );
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count+1});
  }
  getBadgeClasses() {
    let classes = "badge m-2";
    classes += this.state.count === 0 ? " badge-warning" : " badge-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
