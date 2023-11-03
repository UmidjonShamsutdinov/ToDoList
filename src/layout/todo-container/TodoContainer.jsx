import React, { useState } from 'react'
import "./TodoContainer.scss"
import TodoAdder from '../todo-adder/TodoAdder'
import TodoList from '../todo-list/TodoList'




const TodoContainer = () => {
    const [todos, setTodos] = useState([])
  return (
    <div className='todo-container'>
        <TodoAdder todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoContainer