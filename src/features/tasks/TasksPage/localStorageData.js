const tasksKey = "tasks";
const hideDoneKey = "hideDone";

export const setLocalStorageData = (tasks, hideDone) => {
    localStorage.setItem(tasksKey, JSON.stringify(tasks))
    localStorage.setItem(hideDoneKey, JSON.stringify(hideDone))
};

export const getLocalStorageTasks = () => {
    return (JSON.parse(localStorage.getItem(tasksKey)) || []);
};

export const getLocalStorageHideDone = () => {
    return (JSON.parse(localStorage.getItem(hideDoneKey)) || false);
};