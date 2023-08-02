import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: {
    todo: TodoSlice,
    middleware: [thunk]
  }
})

export default store