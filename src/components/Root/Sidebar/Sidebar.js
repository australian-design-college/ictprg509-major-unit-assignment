import React, { Component } from "react";

import NumberInput from "@root/generic-components/NumberInput";

export default class Sidebar extends Component {
  state = { age: null };

  handleUpdate = age => this.setState({ age });

  render() {
    return (
      <div>
        <h4>In what year were you born?</h4>
        <NumberInput onUpdate={this.handleUpdate} />
        {this.state.age && <h4>Oh, you're {this.state.age} years old!</h4>}
      </div>
    );
  }
}
