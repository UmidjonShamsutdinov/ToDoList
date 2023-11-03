import React from 'react'
import "./TodoList.scss"
import PropTypes from "prop-types"
import Todoitem from '../../components/todo-item/Todoitem';
const TodoList = ({ todos, setTodos }) => {
    return (
        <div className='todo-list'>
            {
                todos.map(({ id, todoname, isCompleted, isEdited, isEditing, date, alarm}) =>
                    <Todoitem
                        key={id}
                        id={id}
                        todoname={todoname}
                        isCompleted={isCompleted}
                        isEdited={isEdited}
                        isEditing={isEditing}
                        date={date}
                        alarm={alarm}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )
            }
        </div>
    )
}


TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        todoname: PropTypes.string,
        isCompleted: PropTypes.bool,
        isEditing: PropTypes.bool,
        isEdited: PropTypes.bool,
        date: PropTypes.object,
        alarm: PropTypes.number
    })),
    setTodos:PropTypes.func.isRequired,
    
};

export default TodoList