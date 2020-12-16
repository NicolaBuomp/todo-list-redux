import React from 'react';
import Todo from './todo';

export default function todoList({todos , removeTodo, toggleTodo}) {
    return (
        <ul>

            {todos.map( (todo) => <Todo key={todo.id} id={todo.id} onClick={toggleTodo} todoItem={todo} />)}

            {/* metodo removeTodo.bind() */}
            {/* {this.state.todos.map( (todo, i) => <li key={i}>{todo} <button onClick={this.removeTodo.bind(null, i)}>-</button></li>)} */}
        </ul>
    )
}