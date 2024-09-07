import React from "react";
import "./Comp.css";
import TaskSubItem from "./TaskSubItem";
function TaskItem({ objectArr }) {
  return (
    <>
      {objectArr.map((object, i) => (
        <>
          <TaskSubItem key={i} taskname={object.taskname} date={object.date} />
        </>
      ))}
    </>
  );
}

export default TaskItem;
