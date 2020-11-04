import React from "react";
import { List, ListItem, Button, Span } from './styled';

const TaskList = ({tasks, hideDone, toggleTaskDone, removeTask}) => (
    <List>
        {tasks.map((task) => (
            <ListItem 
                key={task.id}
                hidden={task.done && hideDone}
            >
            <Button 
                check
                onClick={() => {toggleTaskDone(task.id)}}
            >
            {task.done ? <i className="fas fa-check"></i> : ""}
            </Button>

            <Span 
                done={task.done}
            >
            {task.content}
            </Span>

            <Button 
                remove
                onClick={() => {removeTask(task.id)}}
            >
            <i className="fas fa-trash-alt"></i>
            </Button>
            </ListItem>
        ))}
    </List>
);

export default TaskList;