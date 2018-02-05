import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{txt: '1st todo',crossed: false},{txt: '2nd todo',crossed: false}]
    };
  };

  componentWillMount() {
    fetch('https://localhost:3000')
  }

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

  render() {
    return (
      <div className="App">
        <h1>ToDo List</h1>
            <input id="inputTxt" type="text"/>
            <input onClick={() => { this.addTodo(document.getElementById('inputTxt').value); }} type="submit" value="Add"/>
            <List 
              todos={this.state.todos}
              deleteItem={this.deleteItem.bind(this)}
              crossout={this.crossout.bind(this)}
            />
      </div>
    );
  }
}

export default App;
