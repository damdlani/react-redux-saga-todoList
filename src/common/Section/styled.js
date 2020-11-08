import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 10px;
    margin: 10px 0;
`;

export const Header = styled.div`
    display: flex;
    margin: 0 0 3px;
    background-color: white;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    margin: 0 0 3px;
    padding: 20px 30px;
    background-color: white;
    flex-grow: 1;
    display: flex;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const TasksWrapper = styled.div`
    background-color: white;
    font-style: italic;
    font-size: 16px;
    text-align: center;
    padding: 20px;

    @media (max-width: 400px) {
        font-size: 12px;
    }
`;


