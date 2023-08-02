import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateText,
  updateTime,
  addTodo,
  showForm,
} from "../features/TodoSlice";

const NewForm = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.todo.inputText);
  const inputTime = useSelector((state) => state.todo.inputTime);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue) {
      dispatch(
        addTodo({
          id: Date.now(),
          todo: inputValue,
          time: inputTime,
          status: "In Progress",
        })
      );

      dispatch(updateText(""));
      dispatch(updateTime(""));
      dispatch(showForm(false));
    }
  };

  return (
    <div className="form-outer-layer" onClick={() => dispatch(showForm(false))}>
      <form
        className="form"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="head-form">New Activity</h1>
        <input
          type="text"
          placeholder="Your Todo"
          onChange={(e) => dispatch(updateText(e.target.value))}
          value={inputValue}
          autoFocus
        />
        <input
          type="time"
          value={inputTime}
          onChange={(e) => dispatch(updateTime(e.target.value))}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewForm;
