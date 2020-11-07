import { call, put, delay, takeEvery, select } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { setLocalStorageData } from './localStorageData';
import { addExampleTasks, fetchExampleTasks, selectHideDone, selectTasks } from './tasksSlice';


function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield delay(1000);
        yield put(addExampleTasks(exampleTasks))
    } catch (error) {
        yield call (alert, error)
    }
}

function* saveToLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    const hideDone = yield select(selectHideDone);
    console.log(hideDone)
    yield call(setLocalStorageData, tasks, hideDone);
};

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveToLocalStorageHandler);
};