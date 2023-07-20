// import {createStore} from 'redux'
import {configureStore } from '@reduxjs/toolkit';
 import authSlice from './auth-slice';
 import sliceCounter from './counter-slice';
// const counterReducer=(state=initialState,action)=>{
// if(action.type==='increment'){
//     return {
//         counter:state.counter+1,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='increasebyvalue'){
//     return{
//         counter:state.counter+action.value,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='decrement')
// {
//     return {
//         counter:state.counter-1,
//         showCounter:state.showCounter
//     }
// }
// if(action.type==='toggle')
// {
//     return {
//         counter:state.counter,
//         showCounter:!state.showCounter
//     }
// }
// return state;
// }
const store=configureStore({  reducer: {
    counterReducer:sliceCounter.reducer,
    authReducer:authSlice.reducer
  }});
  export const counterActions=sliceCounter.actions
 export const authActions=authSlice.actions;
export default store;