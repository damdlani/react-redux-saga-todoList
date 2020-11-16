import styled from 'styled-components';


export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
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
        padding: 10px;
        font-size: 14px;
    }
`;