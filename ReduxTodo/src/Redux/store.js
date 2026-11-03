 import { configureStore } from "@reduxjs/toolkit";
 import counterReducer from './features/CounterSlice'

// step01: configure store and create reducer in which we will use multiple slices
  export const store = configureStore({
    // in this section we will add all the created slices of feature
    reducer:{
        counter:counterReducer

    }
 })

 export default store