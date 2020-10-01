import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {isAuth: false, authKey: "", defaultLogin: ""},
    reducers: {
        performAuth: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.authKey = action.payload.authKey
            state.defaultLogin = action.payload.defaultLogin
            localStorage.setItem("reduxState", JSON.stringify(state));
        }
    }
})

export const {performAuth} = authSlice.actions
export const selectiIsAuth = state => state.isAuth;
export default authSlice.reducer