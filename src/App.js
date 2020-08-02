import React from 'react';
import Form from './Form'
import Tasks from './Tasks'
import Buttons from './Buttons'

const tasks = [
  {id: 1, content: "test31", done: false },
  {id: 2, content: "test2", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="container">
        <header className="header">
            <h1 className="header__title">Lista zadań</h1>
        </header>
        <main className="todo">
            <section className="todo__new">
                <h2 className="todo__title">Dodaj nowe zadanie</h2>
                <Form />
            </section>
            <section className="todo__list">
                <div className="todo__header">
                    <h2 className="todo__title">Lista zadań</h2>                  
                    <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
                </div>
                <div className="todo__tasks">
                    <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
                </div>
            </section>
        </main>
        <footer className="footer">&copy;Krzysztof Kwieciński 2020</footer>
    </div>
  );
}

export default App;
