import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasks/TasksPage/tasksSlice'
import createSagaMiddleWare from 'redux-saga';
import rootSaga from './rootSaga';


const sagaMiddleWare = createSagaMiddleWare();

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);