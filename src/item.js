import React, { Component } from 'react';

const Item = (props) => {
  var style = 'none';
  if (props.item.crossed) {
    style = 'line-through';
  }
  console.log("What's in props: ", props);
  return (
    <div>
      <li style={{ textDecoration: style }} onClick={() => { props.crossout(props.index) }}>
        {props.item.txt}
      </li>
      <button onClick={() => { props.deleteItem(props.index) }}>Delete</button>
    </div>
  )
}

export default Item;