import { configureStore } from '@reduxjs/toolkit';
import cardReducer from "./cardSlice";
const store= configureStore({
    reducer:{
      mycard:cardReducer
    }
})

export default store;