import React from "react";
import AppName from "./Components/AppName";
import AddTask from "./Components/AddTask";
import TaskItem from "./Components/TaskItem";

function App() {
  return (
    <div>
      <center>
        <AppName />
        <div className="container text-center">
          <AddTask />
          <TaskItem taskname="task 1" date="5/9/24" />
          <TaskItem taskname="task 2" date="6/9/24" />
        </div>
      </center>
    </div>
  );
}

export default App;
