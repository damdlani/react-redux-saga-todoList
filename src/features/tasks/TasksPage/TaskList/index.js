import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { StyledNavLink } from "../../../../common/Nav/styled";
import { removeTask, toggleTaskDone, selectTasks, selectHideDone } from '../tasksSlice';
import { List, ListItem, Button, Span } from './styled';

const TaskList = () => {
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);

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
                    <StyledNavLink to={`/zadania/${task.id}`}>{task.content}</StyledNavLink>
                    </Span>
                    <Button 
                        edit
                    >
                    <StyledNavLink button to={`/zadania/${task.id}`}><i class="fas fa-pencil-alt"></i></StyledNavLink>
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