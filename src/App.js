import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';


function App() {
  const [tasks, setTasks] = useState(
    [
      {id: 1, content: "test1", done: true },
      {id: 2, content: "test2", done: false },
    ]
  );

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone)
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(
      task => ({...task, done: true})
    ))
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }
      
      return task;

    }));
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(
      task => task.id !== id
    ))
  }

  return (
    <Container>
        <Header title="Lista zadań"/>
        <Section 
            title="Dodaj nowe zadanie"
            body={
            <Form />
            }
            />

            <Section
            title="Lista zadań"
            body={
            <Tasks tasks={tasks} hideDone={hideDone} toggleTaskDone={toggleTaskDone} removeTask={removeTask}/>
            } 
            extraContent={
            <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone}/>
            }
            />
        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
}

export default App;
