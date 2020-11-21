import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  margin: 0 auto;
  text-align: center;
  background-color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 300px;
  @media (max-width: 400px) {
        width: 200px;
        height: 240px;
    }
`;

export const Overview = styled.div`
  font-size: 18px;
  padding: 0 30px;

  @media (max-width: 768px) {
    margin: 20px 0;
    padding: 0 10px;
  }
  @media (max-width: 400px) {
        font-size: 14px;
    }
`;
export const Par = styled.p`
  text-align: justify;
  margin: 0 0 15px 0;
`;

export const Link = styled.a`
  text-decoration: none;
  font-style: italic;
  font-weight: 700;
`;
