import React from 'react';
import { useSelector } from 'react-redux'
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './TaskHandlingButtons';
import Section from '../../../common/Section';
import Header from '../../../common/Header';
import Footer from '../../../common/Footer';
import Container from '../../../common/Container';
import { selectTasks } from './tasksSlice';
import { ExampleTasksButton } from './ExampleTasksButton';

function Tasks() {
  const tasks = useSelector(selectTasks);
  
  return (
    <Container>
        <Header title="Lista zadań"/>
        <Section 
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraContent={<ExampleTasksButton />}
        />
        <Section
          title="Lista zadań"
          body={tasks.length > 0 ? 
            <TaskList />
               : `Nie masz na razie żadnych zadań.`}
            extraContent={
            <Buttons />
            }
        />
        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
}

export default Tasks;
