
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import newRequest from "../utils/newRequest";

// const initialState = {
//     costumers: null,
//     pending: null,
//     error: null,
// }

// export const getCostumers = createAsyncThunk("user-costumerUser", async (user) => {
//     const response = await newRequest.get("user/costumers", user);
//     return response.data;
// });


// export const userSlice = createSlice({
//     name: "users",
//     initialState,
//     reducers: {},
//     extraReducers(builder) {
//         builder
//             .addCase(getCostumers.pending, (state) => {
//                 state.pending = true;
//                 state.error = false;
//             })
//             .addCase(getCostumers.fulfilled, (state, action) => {
//                 state.costumers = action.payload;
//                 state.pending = false;
//             })
//             .addCase(getCostumers.rejected, (state) => {
//                 state.pending = false;
//                 state.error = true;
//             })


//     },
// });

// export default postSlice.reducer;
