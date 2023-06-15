
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newRequest from "../utils/newRequest";

const initialState = {
    currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
    pending: null,
    error: null,
}

// const USERS_URL = 'http://localhost:5000/api/user';
// export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
//     const response = await axios.get(USERS_URL);
//     return response.data
// })

export const updateCurrentUser = createAsyncThunk("user-updateUser", async (user) => {
    const response = await newRequest.put("user/update", user);
    return response.data;
});
export const deleteUser = createAsyncThunk(
    "user-deleteUser",
    async (id) => {
        const response = await newRequest.delete("user/delete", { data: { id: id } });
        return response.data

    });

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.pending = true;
        },
        loginSuccess: (state, action) => {
            state.pending = false;
            state.currentUser = action.payload
        },
        loginFailure: (state) => {
            state.pending = false;
            state.error = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.pending = false;
            state.error = false;
        },


    },
    extraReducers(builder) {
        builder
            .addCase(updateCurrentUser.pending, (state) => {
                state.pending = true;
                state.error = false;
            })
            .addCase(updateCurrentUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.pending = false;
            })
            .addCase(updateCurrentUser.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })
            .addCase(deleteUser.pending, (state) => {
                state.pending = true;
                state.error = false;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.currentUser = action.payload
                state.pending = false;
            })
            .addCase(deleteUser.rejected, (state) => {
                state.pending = false;
                state.error = true;
            })

    },
});

export const { loginStart, loginFailure, loginSuccess } = userSlice.actions;
export default userSlice.reducer;
