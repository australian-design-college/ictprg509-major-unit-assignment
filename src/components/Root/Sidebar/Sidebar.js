import React, { Component } from "react";

import NumberInput from "@root/generic-components/NumberInput";

export default class Sidebar extends Component {
  state = { yearBorn: null };

  handleUpdate = yearBorn => this.setState({ yearBorn });

  render() {
    return (
      <div>
        <h4>In what year were you born?</h4>
        <NumberInput onUpdate={this.handleUpdate} />
        {this.state.yearBorn && <h4>Oh, you were born in {this.state.yearBorn}?</h4>}
      </div>
    );
  }
}
