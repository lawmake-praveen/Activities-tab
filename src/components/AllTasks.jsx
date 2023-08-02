import React, { useEffect, useState } from "react";
import NewTask from "./NewTask";
import { useSelector, useDispatch } from "react-redux";
import { chooseStatus, initialUpdateTodo } from "../features/TodoSlice";

const AllTasks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("savedTodos"));

    if (saved) {
      dispatch(initialUpdateTodo(saved));
    }
  }, []);

  const selectedStatus = useSelector((state) => state.todo.selectedStatus);
  const AllTasks = useSelector((state) => state.todo.todos);

  let filteredTasks;
  switch (selectedStatus) {
    case "All":
      filteredTasks = AllTasks;
      break;
    case "In Progress":
      filteredTasks = AllTasks.filter(
        (element) => element.status === "In Progress"
      );
      break;
    case "Completed":
      filteredTasks = AllTasks.filter(
        (element) => element.status === "Completed"
      );
      break;
    default:
      break;
  }

  return (
    <div className="all-tasks">
      <div className="change-category">
        <span className="radio-span">
          <input
            type="radio"
            name="checkboxes"
            id="all"
            checked={selectedStatus === "All"}
            onChange={() => dispatch(chooseStatus("All"))}
          />
          <label htmlFor="all">All</label>
        </span>
        <span className="radio-span">
          <input
            type="radio"
            name="checkboxes"
            id="inprogress"
            checked={selectedStatus === "In Progress"}
            onChange={() => dispatch(chooseStatus("In Progress"))}
          />
          <label htmlFor="inprogress">In Progress</label>
        </span>
        <span className="radio-span">
          <input
            type="radio"
            name="checkboxes"
            id="Completed"
            checked={selectedStatus === "Completed"}
            onChange={() => dispatch(chooseStatus("Completed"))}
          />
          <label htmlFor="Completed">Completed</label>
        </span>
      </div>

      <div className="tasks">
        {filteredTasks.length ? (
          filteredTasks.map((item, index) => {
            return <NewTask key={index} todo={item} />;
          })
        ) : (
          <div className="no-todos">
            {selectedStatus === "All" ? (
              <div>No Activities to Show!</div>
            ) : (
              <div>No "{selectedStatus}" Activities to Show!</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTasks;
