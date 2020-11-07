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

export const selectTasks = state => state.tasks;
export const selectIsExampleTaskLoading = state => selectTasks(state).isExampleTaskLoading;
export default tasksSlice.reducer;
