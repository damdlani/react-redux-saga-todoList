import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding: 15px;
`;

export const Input = styled.input`
    flex-grow: 5;
    margin: 5px;
    padding: 5px 5px 5px 10px;

    @media (max-width: 330px) {
        &::placeholder {
            font-size: 14px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 5px;
    background-color: teal;
    border: none;
    color: white;
    font-size: 16px;
    transition: .3s;
    align-self: flex-start;
    
    &:hover {
    cursor: pointer;
    color: #ddd;
    transform: scale(1.05)
    }

    &:active {
    color: black;
    outline: none;
    }
    &:disabled {
        display: none;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;