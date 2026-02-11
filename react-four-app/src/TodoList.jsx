import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) =>  {
            return [...prevTodos, {task: newTodo, id: uuidv4() }]
        });
        setNewTodo("");
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let upperCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        })
    );
};
    return (
        <div>
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            <br />
            <button onClick={addNewTask}>Add Tasks</button>
            <br />
            <br />
            <br />

            <hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
        </div>
    );
}