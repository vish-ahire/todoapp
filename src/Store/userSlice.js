import { createSlice } from "@reduxjs/toolkit";

const userSlice= createSlice({
    name: "user",
    initialState:{
        login:true
    },
    reducers:{
        isLogin:(state,action)=>{
            state.login = action.payload;
        },
    }
})
       
export const{isLogin} = userSlice.actions
export default userSlice.reducer