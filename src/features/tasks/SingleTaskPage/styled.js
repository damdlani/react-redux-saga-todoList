import styled from "styled-components";

export const TaskHeader = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 3px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 15px;
    }
`;

export const TaskContentForm = styled.form`
    flex-grow: 1;
    display: flex;
    margin-right: 5px;
`;

export const ContentInput = styled.input`
    flex-grow: 2;
    padding: 5px;
    font-size: 24px;
    font-weight: bold;
    border: none;
    
    &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.color.pale};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
    }
`;

export const EditButton = styled.button`
    font-size: 12px;
    margin: 0 5px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.grey};
    border: none;
    transition: .3s ease;

    &:hover {
        filter: brightness(1.2);
        cursor: pointer;
    }
`;

export const TaskSpan = styled.span`
    margin-top: 10px;
    font-weight: bold;
    font-style: italic;
    align-self: center;
`;

export const TaskDetail = styled.section`
    background-color: ${({ theme }) => theme.color.white};
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
    background-color: ${({ theme }) => theme.color.white};
    border: none;

    &:focus {
        outline: none;
        background-color: ${({ theme }) => theme.color.pale};
    }
`;
export const DoneButton = styled.button`
    border: none;
    transition: .3s ease;
    background-color: transparent;

    &:hover {
        font-weight: bold;
        cursor: pointer;
    }
    &:focus {
        outline: none;
    }
`;