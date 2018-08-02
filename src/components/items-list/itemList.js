import React from "react";
import Item from "./item/item";
import "./itemList.css";
const ItemList = props => {
  let list = null;

  if (props.items.length !== 0) {
    let filterdList = props.items.filter(item => {
      return item.name.indexOf(props.searchedItem) !== -1;
    });

    list = filterdList.map(item => {
      return (
        <Item del={props.delete} text={item.name} id={item.id} key={item.id} />
      );
    });
  } else {
    list = <p className="empty">The list is empty</p>;
  }

  return <div className="itemList">{list}</div>;
};

export default ItemList;
