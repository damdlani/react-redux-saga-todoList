import { call, put, delay, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setLocalStorageData } from "./localStorageData";
import {
  fetchExampleTasksSuccess,
  fetchExampleTasksLoading,
  selectHideDone,
  selectTasks,
  fetchExampleTasksError,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield delay(500);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError());
  }
}

function* saveToLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  const hideDone = yield select(selectHideDone);
  yield call(setLocalStorageData, tasks, hideDone);
}

export function* tasksSaga() {
  yield takeEvery(fetchExampleTasksLoading.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveToLocalStorageHandler);
}
