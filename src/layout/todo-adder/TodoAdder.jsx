import React, { useState } from 'react'
import "./TodoAdder.scss"
import {FiPlus} from "react-icons/fi"
import PropTypes from 'prop-types'
import useRandomId from '../../hooks/useRandomId'





const TodoAdder = ({todos, setTodos}) => {

    const id = useRandomId();
    const [todoname, setTodoname] = useState("")



    const handleCreateTodo = e =>{
        const todo = {
            id: id,
            todoname: todoname,
            isCompleted: false,
            isEditing: false,
            isEdited: false,
            date: new Date(),
            alarm: new Date().getTime() + 200000
        }


        setTodos([...todos, todo]);
        e.preventDefault();
        
        
    }

  return (
    <div className='todo-adder'>
        <h1 className='adder__title'>TodoList</h1>
        <form className='adder__form' onSubmit={handleCreateTodo}>
            <div className='form__input-wrapper'>
                <label htmlFor="todo-input">Todo name</label>
                <input type="text" id='todo-input' value={todoname} onChange={e=>setTodoname(e.target.value)} autoComplete='off'/>
            </div>
            <button type='submit'><FiPlus/>Create</button>
        </form>
    </div>
  )
}


TodoAdder.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    setTodos: PropTypes.func.isRequired
}

export default TodoAdder