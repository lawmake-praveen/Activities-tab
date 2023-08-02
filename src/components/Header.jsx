import React from "react";
import { BsPlusLg } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { showForm, updateText, updateTime } from "../features/TodoSlice";

const Header = () => {
  const dispatch = useDispatch();
  const todoAlreadyExists = useSelector(
    (state) => state.todo.todoAlreadyExists
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date().getDate();
  const month = months[new Date().getMonth()];
  const weekday = weekdays[new Date().getDay()];

  return (
    <div className="header">
      <div className="left-header">
        <h2>Today's Activities</h2>
        <div className="date-time">
          {weekday}, {date} {month}
        </div>
      </div>
      {todoAlreadyExists && (
        <span className="todo-exists-msg">Todo already exist!</span>
      )}
      <div className="right-header">
        <button
          className="new-task-btn"
          onClick={() => {
            dispatch(showForm(true));
            dispatch(updateText(""));
            dispatch(updateTime(""));
          }}
        >
          <span className="icon-plus">
            <BsPlusLg />
          </span>
          <span className="new-activity">New Activity</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
