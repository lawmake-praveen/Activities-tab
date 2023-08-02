import React, { useEffect } from "react";
import { Header, NewTask, AllTasks, NewForm } from "./components/export";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const newFormShow = useSelector((state) => state.todo.newFormShow);

  return (
    <div className="app">
      <Header />
      {newFormShow && <NewForm />}
      <AllTasks />
    </div>
  );
};

export default App;
