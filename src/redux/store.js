
import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../redux/reducers/authSlice'
import {createStore} from "redux";

const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}
//export default configureStore({reducer: {authReducer: authReducer}});
export default createStore(authReducer,persistedState);