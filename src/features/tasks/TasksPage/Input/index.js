import styled from "styled-components";

export const Input = styled.input`
  flex-grow: 1;
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
