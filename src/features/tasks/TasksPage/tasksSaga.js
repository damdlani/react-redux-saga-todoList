import {
  call,
  put,
  delay,
  takeEvery,
  select
} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { setLocalStorageData } from "./localStorageData";
import { getRandomTask } from "./getRandomTask";
import {
  fetchExampleTasksSuccess,
  fetchExampleTasksLoading,
  selectHideDone,
  selectTasks,
  fetchExampleTasksError,
  setOutOfExamples,
} from "./tasksSlice";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    const tasks = yield select(selectTasks);
    const exampleTask = yield call(getRandomTask, tasks, exampleTasks);
    yield delay(500);

    if (!exampleTask) {
      yield put(setOutOfExamples());
    } else {
      yield put(fetchExampleTasksSuccess(exampleTask));
    }
  } catch (error) {
    yield delay(500);
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
