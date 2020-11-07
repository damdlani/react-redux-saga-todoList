import { call, put, delay, takeEvery } from 'redux-saga/effects';
import { getExampleTasks } from './getExampleTasks';
import { addExampleTasks, fetchExampleTasks } from './tasksSlice';


function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield delay(1000);
        yield put(addExampleTasks(exampleTasks))
    } catch (error) {
        yield call (alert, error)
    }
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};