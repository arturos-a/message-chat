import {createAction} from "@reduxjs/toolkit";

export const authAction = createAction('AUTH')
export const getContactData = createAction('CONTACT_DATA')

export function auth(state, action) {
    switch (action.type) {
        case authAction.type:
            return state.isAuth = true;
        default:
            return state
    }
}

export function dashboard(state, action) {
    switch (action.type) {
        case getContactData.type:
            //TODO доделать получение данных из бекенда
            return state
        default:
            return state
    }
}

