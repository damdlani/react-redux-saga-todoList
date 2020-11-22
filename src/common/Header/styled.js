import styled from 'styled-components';

export const StyledTitle = styled.h1`
    padding: 0 10px;
    margin: 0;
    font-size: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 28px;
    }
`;