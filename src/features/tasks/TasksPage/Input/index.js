import styled from "styled-components";

export const Input = styled.input`
  flex-grow: 1;
  margin: 5px;
  padding: 5px 5px 5px 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;
