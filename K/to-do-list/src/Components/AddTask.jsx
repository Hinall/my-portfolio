import React from "react";
import "./Comp.css";
function AddTask() {
  return (
    <div>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter task" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTask;
