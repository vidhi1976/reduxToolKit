import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/todo/todoSlice'
//store is the single source of truth
export const store = configureStore({
    reducer: todoReducer
});