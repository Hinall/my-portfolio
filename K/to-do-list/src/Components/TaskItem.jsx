import React from "react";
import "./Comp.css";
function TaskItem(props) {
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6 kg-text">{props.taskname}</div>
        <div className="col-4 kg-text">{props.date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
