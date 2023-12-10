import { bookSlice } from './../Features/Books/BookSlice';
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
  reducer: {
    books : bookSlice.reducer
  }
});

export default store;