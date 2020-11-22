import styled from "styled-components";

export const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  flex-grow: 1;
  padding: 0px;
  margin: 0 10px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.color.teal};
  font-size: 18px;
  transition: color 0.2s, transform 0.2s;

  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
    outline: none;
  }     
  &:focus {
    outline: none;
    filter: brightness(1.5);
  }
  &:disabled {
    color: ${({ theme }) => theme.color.grey};
    filter: none;
    cursor: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    font-size: 14px;
    padding: 5px;
    margin: 5px;
  }
`;
