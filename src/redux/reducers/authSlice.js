import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {isAuth: false, authKey: "", defaultLogin: ""},
    reducers: {
        performAuth: (state, action) => {
            state.isAuth = action.payload.isAuth
            state.authKey = action.payload.authKey
            state.defaultLogin = action.payload.defaultLogin
        }
    }
})
const {actions, reducer} = authSlice
export const {performAuth} = actions

export function authSelector(state) {
    return state.auth;
}


export default reducer