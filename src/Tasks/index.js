import React from "react";
import "./style.css";

const Tasks = ({tasks, hideDone, toggleTaskDone}) => (
    <ul className="todo__ul ">
        {tasks.map((task) => (
            <li key={task.id}
                className={`todo__task ${task.done && hideDone ? " todo__hidden" : ""}`}
            >
            <button 
            className="todo__button todo__button--check"
            onClick={() => {toggleTaskDone(task.id)}}
            >
            {task.done ? <i className="fas fa-check"></i> : ""}
            </button>

            <span className={`todo__span ${task.done ? "todo__span--done" : ""}`}>
            {task.content}
            </span>

            <button className="todo__button todo__button--remove">
            <i className="fas fa-trash-alt"></i>
            </button>
            </li>
        ))}
    </ul>
);

export default Tasks;