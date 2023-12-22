//here we define action and reducer

import {createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //actions are created inside this reducers key.(Action are logics)
        //logic to update the data
        increment:(state,action)=>{
            state.value=state.value+action.payload;
        },
        decrement:(state,action)=>{
            console.log("====action===");
            console.log(action);
            state.value=state.value-action.payload;

        },
        reset:(state)=>{
            state.value=0;
        }
    }
})

export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;