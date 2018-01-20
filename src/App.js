import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{txt: '1st todo',crossed: false},{txt: '2nd todo',crossed: false}]
    };
  };

  addTodo(item) {
    var temp = this.state.todos;
    temp.push({txt:item,crossed:false});
    this.setState({todos:temp});
  };

  deleteItem(index) {
    var holdTodos = this.state.todos;
    holdTodos = holdTodos.slice(0,index).concat(holdTodos.slice(index+1));
    this.setState({todos:holdTodos})
  }

  crossout(index) {
    var holdTodos = this.state.todos;
    holdTodos[index].crossed = !holdTodos[index].crossed;
    this.setState({todos:holdTodos});
  }

  createList(items) {
    const listItems = this.state.todos;
    this.state.todos.map((item, index) => {
      var style = 'none';
      if (item.crossed) {
        style = 'line-through';
      }
    });
    return (
      <div>
        <li style={{ textDecoration: style }} key={index} onClick={() => { this.crossout(index); }}>{item.txt}</li>
        <button id="delete" onClick={() => { this.deleteItem(index); }} value="delete" >Delete</button>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
            <input id="inputTxt" type="text"/>
            <input onClick={() => { this.addTodo(document.getElementById('inputTxt').value); }} type="submit" value="Add"/>
        <ul>
          {/* { this.state.todos.map((item, index) => {
            var style = 'none';
            if (item.crossed) {
              style = 'line-through';
            }
              return(
                <div>
                  <li style={{textDecoration:style}} key={index} onClick={ () => { this.crossout(index); } }>{item.txt}</li>
                  <button id="delete" onClick={ () => { this.deleteItem(index); }} value="delete" >Delete</button>
                </div>
              )
            })
          } */}
        </ul>
      </div>
    );
  }
}

export default App;
