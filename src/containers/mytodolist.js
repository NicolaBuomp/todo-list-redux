import {connect} from 'react-redux';
import TodoList from '../components/todolist';
import { removeTodo,  toggleTodo } from '../actions/index';

const filterMyTodos = (todos = [], filter = 'All') => {
    // eslint-disable-next-line default-case
    switch (filter) {
        case 'To do': return todos.filter(todo => !todo.completed);
        case 'Completed': return todos.filter(todo => todo.completed);
        default: return todos;
        
    }
}
const mapStateToProps = (state) => {
    return {
        todos: filterMyTodos(state.todos, state.activeFilter)
    }
}
const myConnect = connect(mapStateToProps, { toggleTodo });
const myTodoList = myConnect(TodoList);

export default myTodoList;