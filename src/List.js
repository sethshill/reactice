import React, { Component } from 'react';
import Item from './Item.js';

class List extends React.Component {
  constructor(props) {
    super(props);
  }
  // here make a function to render
  render() {
    return (
      <ul>
        {
          this.props.todos.map((item, index) => {
            
            return (
              <Item 
                index={index}
                item={item}
                deleteItem={this.props.deleteItem}
                crossout={this.props.crossout}
              />
            )
          })
        }
      </ul>
    )
    
  }
}

export default List;