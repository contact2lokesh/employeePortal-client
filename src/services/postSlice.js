// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// export const getEmployeeData = createAsyncThunk('posts/getPosts', async()=>{
//     return fetch("http://localhost:8000/api/employees").then((res)=>res.json()
//     );
// }); 

// const postSlice = createSlice({
//     name: "employeeData",
//     initialState:{
//         posts: [],
//         loading: false,
//     },
//     extraReducers:{
//         [getEmployeeData.pending]: (state, action) =>{
//             state.loading = true;
//         }, 
//         [getEmployeeData.fulfilled]: (state, action) =>{
//             state.loading = false;
//             state.posts = action.payload;
//         }, 
//         [getEmployeeData.rejected]: (state, action) =>{
//             state.loading = false;
//         }, 
//     },
// });

// export default postSlice.reducer; 
