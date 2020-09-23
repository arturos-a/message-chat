import {createAction} from "@reduxjs/toolkit";

export const authAction = createAction('AUTH')

export function auth(state, action) {
    switch (action.type) {
        case authAction.type:
            return state.isAuth = true;
        default:
            return state
    }
}

