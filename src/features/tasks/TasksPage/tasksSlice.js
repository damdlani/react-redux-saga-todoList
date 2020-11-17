import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorageHideDone,
  getLocalStorageTasks,
  setLocalStorageData,
} from "./localStorageData";
import { pushRandomTask } from "./pushRandomTask";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getLocalStorageTasks(),
    hideDone: getLocalStorageHideDone(),
    isExampleTaskLoading: false,
    isExampleTaskError: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    removeTask: ({ tasks }, { payload: taskID }) => {
      const index = tasks.findIndex((task) => task.id === taskID);
      tasks.splice(index, 1);
    },
    toggleTaskDone: ({ tasks }, { payload: taskID }) => {
      const index = tasks.findIndex((task) => task.id === taskID);
      tasks[index].done = !tasks[index].done;
    },
    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },
    setEachDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    fetchExampleTasksLoading: (state) => {
      state.isExampleTaskLoading = true;
    },
    fetchExampleTasksSuccess: (state, { payload: exampleTasks }) => {
      state.isExampleTaskLoading = false;

      pushRandomTask(state, exampleTasks);
    },
    fetchExampleTasksError: (state) => {
      state.isExampleTaskLoading = false;
      state.isExampleTaskError = true;
    },
    saveDataToLocal: (state) => {
      setLocalStorageData(state.tasks, state.hideDone);
    },
    changeTaskDetail: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload.id);
      tasks[index].detail = payload.detailContent;
    },
    changeTaskContent: ({ tasks }, { payload }) => {
      const index = tasks.findIndex((task) => task.id === payload.id);
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
  fetchExampleTasksLoading,
  fetchExampleTasksSuccess,
  fetchExampleTasksError,
  saveDataToLocal,
  changeTaskDetail,
  changeTaskContent,
} = tasksSlice.actions;

export const selectTasksState = (state) => state.tasks;

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectIsExampleTaskLoading = (state) =>
  selectTasksState(state).isExampleTaskLoading;
export const selectIsExampleTaskError = (state) =>
  selectTasksState(state).isExampleTaskError;
export const selectIsOutOfExamples = (state) =>
  selectTasksState(state).outOfExamples;
export const selectIsEveryDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectIsNoneDone = (state) =>
  selectTasks(state).every(({ done }) => done === false);
export const selectAreTasks = (state) => selectTasks(state).length > 0;

export const selectTaskByID = (state, taskID) =>
  selectTasks(state).find(({ id }) => id === taskID);

export const selectTaskByQuery = (state, query) => {
  if (!query || query.trim() === "") {
    return selectTasks(state);
  }
  return selectTasks(state).filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
