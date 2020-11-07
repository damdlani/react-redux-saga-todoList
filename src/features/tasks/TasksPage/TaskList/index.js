import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks, removeTask, toggleTaskDone } from '../tasksSlice';
import { List, ListItem, Button, Span } from './styled';

const TaskList = () => {
    const dispatch = useDispatch();
    const { tasks, hideDone } = useSelector(selectTasks);

    return  <List>
                {tasks.map((task) => (
                    <ListItem 
                        key={task.id}
                        hidden={task.done && hideDone}
                    >
                    <Button 
                        check
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                    {task.done ? <i className="fas fa-check"></i> : ""}
                    </Button>

                    <Span 
                        done={task.done}
                    >
                    {task.content}
                    </Span>
                    <Button 
                        edit
                    >
                    <i class="fas fa-pencil-alt"></i>
                    </Button>
                    <Button 
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                    <i className="fas fa-trash-alt"></i>
                    </Button>
                    </ListItem>
                ))}
            </List>
};

export default TaskList;