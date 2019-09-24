import React from 'react';

const Todos = ({todos,deleteTodo}) => {   // Array destructing is done here eg. const {todos}=props;
    
const todoList = todos.length ? (
    todos.map(todo => {
        return(
        <div className="collection-item" key={todo.id}>
        <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
        )
    })
    ) : (
    <p className='center'>You have no todos left. Yay!!</p>
    )
    return(
        <div className="todos collection">
        {todoList}
        </div>

    )
}

export default Todos;