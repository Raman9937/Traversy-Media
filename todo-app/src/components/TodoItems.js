import React, { Component } from 'react';
import propTypes from 'prop-types';

class TodoItems extends Component {

 getStyle = ()=> {
  return {
      backgroundColor:'grey',
      border:'1px #ccc dotted',
      textDecoration:this.props.todo.completed ? 'line-through' : 'none'
  }
 }

    render() {
        //Destructing 
        const { id, title }=this.props.todo; //we are pulling id and title from the todo and we can use "id" and "todo" any where in this component




        //console.log(this.props.todo);
        return (
            <div>
                {/* {this.props.todo.title} */}

                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                    {title}
                    <button onClick ={this.props.delTodo.bind(this,id)} style={btn}>  x </button>
                </p>

            </div>
        );
    }
}
 
//propTypes
TodoItems.propTypes = {
    todo:propTypes.object.isRequired
}

const itemStyle= {
    backgroundColor:'grey'
}
const btn = {
    background:'red',
    color:'white',
    borderRadius:'20%',
    cursor:'pointer',
    float:'right'

}

export default TodoItems;