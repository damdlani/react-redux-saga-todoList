import { createSlice } from '@reduxjs/toolkit';
import { getDate } from '../getDate';
import { getRandomIndex } from '../getRandomTask';
import { getLocalStorageHideDone, getLocalStorageTasks, setLocalStorageData } from './localStorageData';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getLocalStorageTasks(),
        hideDone: getLocalStorageHideDone(),
        isExampleTaskLoading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID)
            tasks.splice(index, 1)
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID)
            tasks[index].done = !tasks[index].done;
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        setEachDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: (state) => {
            state.isExampleTaskLoading = true;
        },
        addExampleTasks: (state, { payload: exampleTasks }) => {
            state.isExampleTaskLoading = false;
            
            const pushRandomTask = () => {
                const index = getRandomIndex(exampleTasks.length);
                if(state.tasks.find(({ id }) => id === exampleTasks[index].id)){
                    try {
                        pushRandomTask();
                    } catch(error) {
                        state.outOfExamples = true;
                    }
                } else {
                    state.tasks.push({...exampleTasks[index], date: getDate()});
                }
            }
            pushRandomTask()
        },
        saveDataToLocal: (state) => {
            setLocalStorageData(state.tasks, state.hideDone)
        },
        changeTaskDetail: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload.id);
            tasks[index].detail = payload.detailContent;
        },
        changeTaskContent: ({tasks}, {payload}) => {
            const index = tasks.findIndex(task => task.id === payload.id);
            tasks[index].content = payload.taskContent;
        },
    },
});

export const { 
    addTask,
    removeTask,
    toggleTaskDone, 
    toggleHideDone, 
    setEachDone, 
    fetchExampleTasks,
    addExampleTasks,
    saveDataToLocal,
    changeTaskDetail,
    changeTaskContent
    } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsExampleTaskLoading = state => selectTasksState(state).isExampleTaskLoading;
export const selectIsOutOfExamples = state => selectTasksState(state).outOfExamples;
export const selectIsEveryDone = state => selectTasks(state).every(({done}) => done);
export const selectIsNoneDone = state => selectTasks(state).every(({done}) => done === false);
export const selectTaskByID = (state, taskID) => selectTasks(state).find(({ id }) => id === taskID);

export default tasksSlice.reducer;
