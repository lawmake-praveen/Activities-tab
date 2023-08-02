import React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  showForm,
  updateStatus,
  updateTodo,
} from "../features/TodoSlice";

const NewTask = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="new-task">
      <div className="checkbox-div">
        <input
          type="checkbox"
          checked={todo.status === "Completed"}
          onChange={(e) => {
            dispatch(updateStatus({ status: e.target.checked, todo: todo }));
          }}
        />
      </div>
      <div className="content">
        <h3
          className="todo-content"
          style={{
            textDecoration:
              todo.status === "Completed" ? "line-through" : "none",
          }}
        >
          {todo.todo}
        </h3>
        <p
          className="todo-timing"
          style={{
            textDecoration:
              todo.status === "Completed" ? "line-through" : "none",
          }}
        >
          {todo.time}
        </p>
      </div>
      <div className="check-and-edit-section">
        <div className="icons">
          <span
            className="delete-symbol"
            onClick={() => dispatch(deleteTodo(todo))}
          >
            <AiOutlineDelete />
          </span>
          <span
            className="edit-symbol"
            onClick={() => {
              dispatch(updateTodo(todo));
              dispatch(showForm(true));
            }}
          >
            <AiOutlineEdit />
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
