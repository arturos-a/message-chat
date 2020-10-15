import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ContactsApi} from "../../api/contactsApi";

export const fetchContactsByUserId = createAsyncThunk(
    'contacts/fetchByUserId',
    async (userId) => {
        const contactsApi = new ContactsApi();
        const response = await contactsApi.getContacts(userId)
        return response.data
    }
)


const dashBoardSlice = createSlice({
    name: "dash",
    initialState: {
        profileId: 12312,
        contacts: [],
        chats: [],
        selectedContactId: 0
    },
    reducers: {
        updateChat: (state, action) => {
            state.contacts = action.payload//.contacts
        },
        updateSelectedContact: (state, action) => {
            state.selectedContactId = action.payload
        }


    },
    extraReducers: {
        [fetchContactsByUserId.fulfilled]: (state, action) => {
            const contacts = action.payload.contacts;
            contacts.forEach(item => {
                state.contacts.push(item)
            })
            if (contacts && contacts.length > 0) {
                state.selectedContactId = contacts[0].id
            }
        }
    }
})

export function dashSelector(state) {
    return state.dash;
}

const {actions, reducer} = dashBoardSlice

export const {updateChat, updateSelectedContact} = actions

export default reducer