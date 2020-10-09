import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ContactsApi} from "../../api/contactsApi";

const fetchContactsByUserId = createAsyncThunk(
    'contacts/fetchByUserId',
    async (userId, thunkAPI) => {
        const contactsApi = new ContactsApi();
        const response = await contactsApi.getContacts(userId)
        return response.data
    }
)

const dashBoardSlice = createSlice({
    name: "dash",
    initialState: {userId: 0,
        contacts: [],
        chats: []
    },
    reducers: {
        updateChat: (state, action) => {
            state.userId = state.userId
            fetchContactsByUserId()
        }
    },
    extraReducers: {
        [fetchContactsByUserId.fulfilled]: (state, action) => {
            state.contacts = action.payload
        }
    }
})
export function dashSelector(state) {
    return state.dash;
}
const { actions, reducer } = dashBoardSlice

export const { updateChat } = actions

export default reducer