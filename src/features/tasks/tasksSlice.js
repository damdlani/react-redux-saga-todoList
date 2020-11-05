import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [
            {
                content: "Zadanie z reduxa",
                done: true,
                id: 1,
            }
        ],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload)
            tasks.splice(index, 1)
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(task => task.id === payload)
            tasks[index].done = !tasks[index].done;
        },
        toggleHideDone: ( state ) => {
            state.hideDone = !state.hideDone;
        },
        setEachDone: ( state ) => {
            state.tasks = state.tasks.map(
                task => ({...task, done: true})
              )
        },
    },
});

export const { addTask, removeTask, toggleTaskDone, toggleHideDone, setEachDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;
