import React, { useState } from 'react';
import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const tasks = [
  {id: 1, content: "test1", done: true },
  {id: 2, content: "test2", done: false },
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => setHideDone(hideDone = !hideDone);


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
            <Tasks tasks={tasks} hideDone={hideDone} />
            } 
            extraContent={
            <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone}/>
            }
            />
        <Footer content="&copy;Krzysztof Kwieciński 2020" />
    </Container>
  );
}

export default App;
