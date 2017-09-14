import React, { Component } from 'react';
import './App.css';
import Todo from "./components/Todo";
import Completed from "./components/Completed";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todo: [],
      completed: ["Buy Milk", "take a nap", "code app", "learn more node", "eat", "sleep"]
    }

    this.addItem = this.addItem.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  addItem(val) {
    let todoCopy = this.state.todo.slice();
    todoCopy.push(val);
    this.setState({
      todo: todoCopy
    })
  }

  completeItem(index, val){
    let todoCopy = this.state.todo.slice();
    todoCopy.splice(index, 1);

    let completedCopy = this.state.completed.slice();

    completedCopy.push(val);
    this.setState({
      todo: todoCopy,
      completed: completedCopy
    })
  }
  

  render() {
    return (
      <div className="App">
        from the app.js

        <Todo todoList={this.state.todo} 
          addItem={this.addItem} 
          completedItem={this.completeItem} />

        <Completed 
        completedList={this.state.completed}/>
      </div>




    );
  }
}

export default App;
