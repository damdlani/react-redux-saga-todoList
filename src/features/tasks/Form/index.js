import React, { useState, useRef} from "react"
import { StyledForm, Input, Button } from './styled';

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

    return <StyledForm
        onSubmit={onFormSubmit}
    >
        <Input
            autoFocus
            type="text"
            placeholder="Co jest do zrobienia?"
            ref={inputRef}
            value={newTaskContent}
            onChange={changeNewTaskContent}
        />
        <Button
        >
            Dodaj zadanie
        </Button>
    </StyledForm>
};

export default Form;