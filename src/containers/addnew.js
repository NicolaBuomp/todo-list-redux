import {connect} from 'react-redux';
import addTodoComponent from '../components/addtodo';
import { addTodo } from '../actions/index'

// const mapStateToProps = (dispatch) => {
//     return {
//         addnew: (todo) => {
//             dispatch(addTodo(todo));
//         }
//     }
// }



// export default connect(null,)(addTodoComponent);

const methods = {
    addnew: addTodo,
}
export default connect(null, methods)(addTodoComponent);


