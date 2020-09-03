import { useLocalStorageState } from './useLocalStorageState';


export const useTasks = () => {  
    const [tasks, setTasks] = useLocalStorageState("tasks", [])
    const [hideDone, setHideDone] = useLocalStorageState("hideDone", false)

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
    const toggleHideDone = () => {
      setHideDone(hideDone => !hideDone);    
    };
  
    return {
      tasks,
      hideDone,
      setEachDone,
      toggleTaskDone,
      removeTask,
      addNewTask,
      toggleHideDone,
    };
  };