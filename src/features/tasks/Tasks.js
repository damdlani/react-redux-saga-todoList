import React, { useState, useEffect } from 'react';
import Form from './Form';
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks'


function Tasks() {
  
  const {
    tasks,
    hideDone,
    setEachDone,
    toggleTaskDone,
    removeTask,
    addNewTask,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
        <Header title="Lista zadań"/>
        <Section 
            title="Dodaj nowe zadanie"
            body={
            <Form 
            addNewTask={addNewTask}
            />
            }
            />

            <Section
            title="Lista zadań"
            body={tasks.length !== 0 ? 
              <TaskList 
                tasks={tasks} 
                hideDone={hideDone} 
                toggleTaskDone={toggleTaskDone} 
                removeTask={removeTask}
              />
               : `Nie masz na razie żadnych zadań.`}
            extraContent={
            <Buttons 
              tasks={tasks} 
              hideDone={hideDone} 
              toggleHideDone={toggleHideDone} 
              setEachDone={setEachDone}
            />
            }
            />
        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
}

export default Tasks;
