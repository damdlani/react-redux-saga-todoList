import React, { useState, useRef} from "react"
import "./style.css"

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTaskContent.trim();
        if (trimmedTaskContent === ""){
            return
        };
        addNewTask(trimmedTaskContent);
        setNewTaskContent("");
        inputFocus();
    };
    const changeNewTaskContent = (event) => {
        setNewTaskContent(event.target.value)
    };
    const inputFocus = () => {
        inputRef.current.focus();
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
            ref={inputRef}
            value={newTaskContent}
            onChange={changeNewTaskContent}
        />
        <button
            className="form__submit "
        >
            Dodaj zadanie
        </button>
    </form>
};

export default Form;