import React, { useState } from "react"
import "./style.css"

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };
    const changeNewTaskContent = (event) => {
        setNewTaskContent(event.target.value)
    };

    return <form 
            className="form"
            onSubmit={onFormSubmit}
            >
                <input 
                className="form__input" 
                autoFocus 
                type="text" 
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={changeNewTaskContent}
                />
                <button 
                className="form__submit ">
                    Dodaj zadanie
                </button>
            </form>
};

export default Form;