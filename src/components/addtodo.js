export default function addTodoComponent({addnew}) {
    let todoInput;
    return (
        <div className="addTodo">
            <input 
            onKeyUp = {(event) => {
                    if (+event.keyCode === 13) {
                        addnew( todoInput.value )
                        todoInput.value = '';
                    }
                }
            }
            ref= { node => { todoInput = node}}/>
            <button onClick={ 
                () => {
                    addnew( todoInput.value );
                    todoInput.value = '';
                }}
            >Add</button>
        </div>
    )
}