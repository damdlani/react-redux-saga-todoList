import styled from 'styled-components';


export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    margin: 5px;
    background-color: ${({ theme }) => theme.color.teal};
    border: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    transition: .3s;
    align-self: flex-start;
    
    &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.pale};
    transform: scale(1.05)
    }

    &:active {
    color: ${({ theme }) => theme.color.black};
    outline: none;
    }
    &:disabled {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
        padding: 10px;
        font-size: 14px;
    }
`;