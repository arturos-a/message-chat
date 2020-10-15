import authReducer from '../redux/reducers/authSlice'
import dashReducer from '../redux/reducers/dashboardSlice'
import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import throttle from 'lodash.throttle';
import {loadState, saveState} from "./localStorage";

const persistedState = loadState();
const store = configureStore({
    reducer: {
        auth: authReducer,
        dash: dashReducer
    }, middleware: [...getDefaultMiddleware()], preloadedState: persistedState//
});

store.subscribe(store.subscribe(throttle(() => {
    saveState(
        store.getState()
    );
}, 1000)))
export default store