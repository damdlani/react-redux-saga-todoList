import React from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./TaskHandlingButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { selectAreTasks } from "./tasksSlice";
import { ExampleTasksButton } from "./ExampleTasksButton";
import { Search } from "./Search";

export const Tasks = () => {
  const areTasks = useSelector(selectAreTasks);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraContent={<ExampleTasksButton />}
      />
      {areTasks ? <Section title="Filtruj zadania" body={<Search />} /> : ""}
      <Section
        title="Lista zadań"
        body={areTasks ? <TaskList /> : `Nie masz na razie żadnych zadań.`}
        extraContent={<Buttons />}
      />
    </Container>
  );
};
