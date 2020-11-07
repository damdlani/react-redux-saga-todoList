import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [{id: 1,content: "dupa", done: false},{id: 2,content: "dupa", done: true}],
        hideDone: false,
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
            for ( const task of exampleTasks) {
                state.tasks.push(task);
            }
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
    addExampleTasks 
    } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks
export const selectHideDone = state => selectTasksState(state).hideDone
export const selectIsExampleTaskLoading = state => selectTasksState(state).isExampleTaskLoading;
export const selectIsEveryDone = state => selectTasks(state).every(({done}) => done);
export const selectIsNoneDone = state => selectTasks(state).every(({done}) => done === false);

export default tasksSlice.reducer;
