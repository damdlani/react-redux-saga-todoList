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
    [{id:1, content: "test1", done: true}]
  );

  const [hideDone, setHideDone] = useState(false);
  
  let localHideDone = JSON.parse(localStorage.getItem("hideDone"));
  

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
    localStorage.setItem("hideDone", hideDone);
  };

  const setEachDone = () => {
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

  const addNewTask = (content) => {
    setTasks(tasks => [...tasks, {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      content: content,
      done: false
      } 
    ]
    )
  } 


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
              <Tasks 
                tasks={tasks} 
                hideDone={localHideDone} 
                toggleTaskDone={toggleTaskDone} 
                removeTask={removeTask}
              />
               : `Nie masz na razie żadnych zadań.`}
            extraContent={
            <Buttons 
              tasks={tasks} 
              hideDone={localHideDone} 
              toggleHideDone={toggleHideDone} 
              setEachDone={setEachDone}
            />
            }
            />
        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
}

export default App;
