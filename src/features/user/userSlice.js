import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: ""
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.state
            state.photo = action.payload.photo
        },
        setSignOutState: state => {
            state.name = ""
            state.email = ""
            state.photo = ""
        }
    }
});

export default userSlice.reducer
export const { setUserLoginDetails, setSignOutState } = userSlice.actions