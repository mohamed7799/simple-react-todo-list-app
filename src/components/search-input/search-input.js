import React, { Component } from "react";
import "./search-input.css";
class SearchInput extends Component {
  state = {
    value: ""
  };
  changeHandler = e => {
    this.setState({ value: e.target.value }, () =>
      this.props.search(this.state.value)
    );
  };

  render() {
    return (
      <div className="bar search-Input">
        <input
          onChange={this.changeHandler}
          className="bar__text"
          type="text"
          value={this.state.value}
        />
        <div className="bar__symbol search">
          <i className="fas fa-search" />
        </div>
      </div>
    );
  }
}

export default SearchInput;
