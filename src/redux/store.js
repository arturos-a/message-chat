
import {configureStore} from "@reduxjs/toolkit";
import authReducer from '../redux/reducers/authSlice'


export default configureStore({reducer: {authReducer: authReducer}});