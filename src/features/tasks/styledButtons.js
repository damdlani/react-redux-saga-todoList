import styled from 'styled-components';

export const ButtonsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Button = styled.button`
    flex-grow: 1;
    padding: 0px;
    margin: 0 10px;
    border: none;
    background-color: transparent;
    color: hsl(180, 66%, 20%);
    font-size: 18px;
    transition: color .2s, transform .2s;

    &:hover {
        color: hsl(180, 66%, 40%);
        cursor: pointer;
    }

    &:active {
        transform: scale(0.9);
        outline: none;
    }

    &:disabled {
        color: hsl(0, 0%, 60%);
        cursor: auto;
    }

    &:focus {
        outline: none;
        color: hsl(180, 66%, 40%);
    }

    @media (max-width: 768px) {
        padding: 10px;
    }

    @media (max-width: 400px) {
        padding: 5px;
        margin: 5px;
    }
`;