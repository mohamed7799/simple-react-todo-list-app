import React, { Component } from "react";
import ItemList from "./components/items-list/itemList";
import AddInput from "./components/add-input/add-input";
import SearchInput from "./components/search-input/search-input";
import "./App.css";

class App extends Component {
  state = {
    list: [],
    searchedValue: ""
  };

  addTask = task => {
    let copyList = this.state.list.slice();
    copyList.push({ name: task, id: Math.random() });
    this.setState({ list: copyList });
  };

  deleteTask = id => {
    let copyList = this.state.list.slice();
    for (let i = 0; i < copyList.length; i++) {
      if (id === copyList[i].id) {
        copyList.splice(copyList.indexOf(copyList[i]), 1);
      }
    }
    this.setState({ list: copyList });
  };

  search = item => {
    this.setState({ searchedValue: item });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__title">React todo app</h1>
        <AddInput Add={this.addTask} />
        <SearchInput search={this.search} />
        <hr className="App__line" />
        <ItemList
          searchedItem={this.state.searchedValue}
          delete={this.deleteTask}
          items={this.state.list}
        />
      </div>
    );
  }
}

export default App;
