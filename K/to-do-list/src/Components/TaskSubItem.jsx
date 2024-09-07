import React from "react";
import "./Comp.css";

function TaskSubItem({ taskname, date }) {
  return (
    <div className="row kg-row">
      <div className="col-6 kg-text">{taskname}</div>
      <div className="col-4 kg-text">{date}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger kg-button">
          delete
        </button>
      </div>
    </div>
  );
}

export default TaskSubItem;
