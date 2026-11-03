import { createSlice } from "@reduxjs/toolkit";



export const CounterSlice =createSlice({
    name:'counter',
    initialState:{
        value:5,
    },
    reducers:{
        increment:(state)=>{
      state.value +=1
        },
        decrement:(state)=>{
     state.value -= 1
        },
        byValue:(state , actions)=>{
        state.value += actions.payload
        },
        reset:(state)=>{
   state.value = 0
        }
    }
})

export const {increment , decrement , byValue,reset} = CounterSlice.actions
export default CounterSlice.reducer