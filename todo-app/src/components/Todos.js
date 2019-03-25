import React, { Component } from 'react';
import TodoItems from './TodoItems';
import propTypes from 'prop-types';

class Todos extends Component {
    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <TodoItems key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    } 
}


//propTypes
Todos.propTypes = {
    todos:propTypes.array.isRequired
}
export default Todos;