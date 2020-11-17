import React from "react";
import { StyledSection, Header, Title, TasksWrapper } from "./styled";

const Section = ({ title, body, extraContent }) => {
  return (
    <StyledSection>
      <Header>
        <Title>{title}</Title>
        {extraContent}
      </Header>
      <TasksWrapper>{body}</TasksWrapper>
    </StyledSection>
  );
};

export default Section;
