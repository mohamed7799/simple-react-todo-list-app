import React, { Component } from "react";
import "./add-input.css";
class AddInput extends Component {
  state = {
    value: ""
  };

  changeHandler = e => {
    this.setState({ value: e.target.value });
  };

  add = () => {
    let added_task = this.refs.addedTask.value;
    this.props.Add(added_task);
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="bar add-Input">
        <input
          ref="addedTask"
          onChange={this.changeHandler}
          className="bar__text "
          type="text"
          value={this.state.value}
        />
        <div onClick={this.add} className="bar__symbol plus">
          <i className="fas fa-plus" />
        </div>
      </div>
    );
  }
}

export default AddInput;
