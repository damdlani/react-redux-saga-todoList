import styled from "styled-components";

export const TaskHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    margin: 0 0 3px;
    background-color: white;
    padding: 20px;
`;

export const TaskContentForm = styled.form`
    display: flex;
`;

export const ContentInput = styled.input`
    flex-grow: 2;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    
    &:focus {
        outline: none;
        background-color: #eee;
    }
`;

export const EditButton = styled.button`
    font-size: 12px;
    margin: 0 5px;
    background-color: white;
    color: #666;
    border: none;
    transition: .3s ease;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;

export const TaskSpan = styled.span`
    font-weight: bold;
    align-self: center;
`;

export const TaskDetail = styled.section`
    background-color: white;
    padding: 20px;
`;

export const DetailForm = styled.form`
    width: 100%;
    display: flex;
    margin: 5px 0 15px;
    flex-direction: column;
`;

export const TextArea = styled.textarea`
    resize: none;
    margin: 10px 0;
    padding: 10px 5px;
    background-color: white;
    border: none;

    &:focus {
        outline: none;
        background-color: #eee;
    }
`;
