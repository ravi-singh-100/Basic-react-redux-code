import { createSlice } from "@reduxjs/toolkit";
const initialCounterState={counter:0,showCounter:true};

 
 const sliceCounter=createSlice({
    name:'counter',
initialState:initialCounterState,
reducers:{
    increment(state){
        state.counter++;
    },
    decrement(state){
state.counter--
    },
    increasebyvalue(state,action){
       state.counter=state.counter+action.payload.value
    },
    toggle(state){
state.showCounter=!state.showCounter
    }

}
 })
 export default sliceCounter;