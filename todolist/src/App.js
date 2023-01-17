import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import tasks from "../fixtures/tasks";

import "./App.css";

import { setTasks } from "./actions";

import ListContainer from "./components/ListContainer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div className="App">
      <h1>to-do</h1>
      <ListContainer />
    </div>
  );
}

export default App;
