import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddComponent from './components/AddComponent';

class App extends Component {
state= {
  todos: [
    {
    id:1,
    title:'Take out trash',
    completed:true
    },
    {
      id:2,
      title:'Dinner With Wife',
      completed:false
    },
    {
      id:3,
      title:'lunch with friends',
      completed:false
      }
    ]

}
//Toggle Complete
markComplete= (id)=>{
  //console.log(id);
  this.setState({
    todos:this.state.todos.map(todo=>{
      if (todo.id===id) {
        todo.completed=!todo.completed
      }
      return todo;
    })
  });
}

//delete Todo
//this method will return the todos that does not match the id which is pass
delTodo = (id)=>{
  this.setState({
    todos:[...this.state.todos.filter(todo=>todo.id !==id)]
  });
}

  render() {
    //console.log(this.state.todos);
    return (
      <div className="App">
      <Header/>
      <AddComponent/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
   
      </div>
    );
  }
}

export default App;
