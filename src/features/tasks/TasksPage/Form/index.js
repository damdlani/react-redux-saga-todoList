import React, { useState, useRef} from "react"
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';
import { StyledForm, Input, Button } from './styled';
import { getDate } from "../../getDate";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedTaskContent = newTaskContent.trim();
        
        if (trimmedTaskContent === ""){
            return
        };
        dispatch(addTask({
            content: trimmedTaskContent,
            done: false,
            date: getDate(),
            detail: "",
            id: nanoid(),
        }))
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