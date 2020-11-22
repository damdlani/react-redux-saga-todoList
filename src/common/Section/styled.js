import styled from 'styled-components';

export const StyledSection = styled.section`
    padding: 10px;
    margin: 10px 0;
`;

export const Header = styled.div`
    display: flex;
    margin: 0 0 3px;
    background-color: ${({ theme }) => theme.color.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const Title = styled.h2`
    margin: 0 0 3px;
    padding: 15px 30px;
    background-color: ${({ theme }) => theme.color.white};
    flex-grow: 1;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
    }
`;

export const TasksWrapper = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    font-style: italic;
    font-size: 16px;
    text-align: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        font-size: 12px;
        padding: 10px 0;
    }
`;


