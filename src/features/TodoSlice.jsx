import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  inputText: "",
  inputTime: "",
  newFormShow: false,
  selectedStatus: "All",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initialUpdateTodo: (state, action) => {
      state.todos = action.payload;
    },
    updateText: (state, action) => {
      state.inputText = action.payload;
    },
    updateTime: (state, action) => {
      state.inputTime = action.payload;
    },
    updateStatus: (state, action) => {
      const matchingId = state.todos.findIndex(
        (item) => item.id === action.payload.todo.id
      );

      state.todos[matchingId].status = action.payload.status
        ? "Completed"
        : "In Progress";

      localStorage.setItem("savedTodos", JSON.stringify(state.todos));
    },
    chooseStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      state.selectedStatus = "All";
      localStorage.setItem("savedTodos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      const updatedTodos = state.todos.filter(
        (element) => element.id !== action.payload.id
      );
      state.todos = updatedTodos;
      localStorage.setItem("savedTodos", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.inputText = action.payload.todo;
      state.inputTime = action.payload.time;

      const updatedTodos = state.todos.filter(
        (element) => element.id !== action.payload.id
      );
      state.todos = updatedTodos;
      localStorage.setItem("savedTodos", JSON.stringify(state.todos));
    },
    showForm: (state, action) => {
      state.newFormShow = action.payload;
    },
  },
});

export const {
  initialUpdateTodo,
  updateText,
  updateTime,
  updateStatus,
  chooseStatus,
  addTodo,
  deleteTodo,
  updateTodo,
  showForm,
} = todoSlice.actions;
export default todoSlice.reducer;
