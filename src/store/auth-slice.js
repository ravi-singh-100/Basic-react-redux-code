import { createSlice } from "@reduxjs/toolkit";
const intitalAuthticatedState={isAuthticated:false};
const authSlice=createSlice({
   name:'authentication',
   initialState:intitalAuthticatedState,
   reducers:{
login(state){
   state.isAuthticated=true
},
logout(state){
state.isAuthticated=false
}
   }
})
export default authSlice;