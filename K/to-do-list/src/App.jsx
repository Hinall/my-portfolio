import React from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";

function App() {
  const objectArr = [
    { taskname: "learn react", date: "5/9/24" },
    { taskname: "make prject", date: "5/9/24" },
    { taskname: "deploy project", date: "5/9/24" },
  ];
  return (
    <>
      <center>
        <AppName />
        <div className="container">
          <AddTask />
          <TaskItem objectArr={objectArr} />
        </div>
      </center>
    </>
  );
}

export default App;
