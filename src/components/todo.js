import React from 'react';
import DeleteItem from './deletetodo';


export default function todo({todoItem, onClick, id}) {
    return (
        <li className={todoItem.completed ? 'completed' : ''} onClick={() => onClick(id)}>
            <span className={todoItem.completed ? 'completed' : 'uncompleted'}></span>
            {todoItem.todo}
            <DeleteItem />
        </li>
    )
}